process.env.ENTRY_INDEX = 'dev';

const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const importFresh = require('import-fresh');
const replace = require('json-templater/string');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const devWebpack = require('./webpack.dev.conf');

const configPath = path.join(__dirname, './config.js');

/**
 * a-bc-d --> aBcD
 * @param {string} s
 */
const camelize = s => s.replace(/-(\w)/g, ($, $1) => $1.toUpperCase());

/**
 * radio-group --> radio
 * @param {string} s
 */
const getUpper = s => s.replace(/(-[a-z]*)/g, '');

let { componentName } = require('./config').dev;

const componentsInPrototype = ['WolfModal', 'message', 'notification'];

const MAIN_TEMPLATE = `import 'babel-polyfill';
import './index.less';
import 'highlight.js/styles/solarized-light.css';
import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VueClipboard from 'vue-clipboard2';
import Md from './components/md';
import Api from './components/api';
import demoBox from './components/demoBox';
import demoContainer from './components/demoContainer';
import { Modal } from 'wolf-antd';
import { message } from 'ant-design-vue';
import { Notification } from 'wolf-antd';
{{importComponents}}
{{importStyles}}
import '../components/notification/style';
import Test from '../components/{{name}}/demo/index.vue';
import zhCN from './theme/zh-CN';
import enUS from './theme/en-US';

Vue.use(Vuex);
Vue.use(VueClipboard);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.component(Md.name, Md);
Vue.component(Api.name, Api);
Vue.component('demo-box', demoBox);
Vue.component('demo-container', demoContainer);

Vue.prototype.$message = message;
Vue.prototype.$notification = Notification;
Vue.prototype.$info = WolfModal.info;
Vue.prototype.$success = WolfModal.success;
Vue.prototype.$error = WolfModal.error;
Vue.prototype.$warning = WolfModal.warning;
Vue.prototype.$confirm = WolfModal.confirm;
Vue.prototype.$destroyAll = WolfModal.destroyAll;

Vue.use(WolfModal);
{{install}}

const i18n = new VueI18n({
  locale: enUS.locale,
  messages: {
    [enUS.locale]: { message: enUS.messages },
    [zhCN.locale]: { message: zhCN.messages },
  },
});

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/test',
    component: () => import('../components/test/index.vue'),
  }, {
    path: '/*', component: Test
  }],
});

const store = new Vuex.Store({
  state: {
    username: 'zeka',
  },
  mutations: {
    update(state, payload) {
      state.username = payload.username;
    },
  },
});
new Vue({
  el: '#app',
  i18n,
  router,
  store,
});
`;

const OUTPUT_PATH = path.join(__dirname, '../site/dev.js');

const generateEntry = components => {
  return Object.keys(components.AntComponent)
    .map(component => {
      return `import {${component}} from 'ant-design-vue'`;
    })
    .concat(
      Object.keys(components.WolfComponent).map(component => {
        if (/wolf/i.test(component)) {
          return `import ${component} from '../components/${components.WolfComponent[component]}';`;
        } else {
          return '';
        }
        // return `import ${component} from '../components/${components[component]}';`;
      }),
    )
    .join('\n');
};

const generateStyles = components =>
  Object.keys(components.WolfComponent)
    .map(component => {
      //爱学习组件样式走本地
      if (/wolf/i.test(component)) {
        return `import '../components/${components.WolfComponent[component]}/style';`;
      } else {
        return '';
      }
    })
    .join('\n');

const generateInstall = components =>
  Object.keys(components.AntComponent)
    .map(component => `Vue.use(${component});`)
    .concat(Object.keys(components.WolfComponent).map(component => `Vue.use(${component});`))
    .join('\n');

const renderTemplate = name => {
  const components = {
    AntComponent: {
      Tooltip: 'tooltip', // for DemoBox
      Icon: 'icon', // Basic
    },
    WolfComponent: {},
  };

  const demoPaths = fs
    .readdirSync(path.join(__dirname, `../components/${name}/demo`))
    .map(p => `../components/${name}/demo/${p}`);
  const testPaths = fs
    .readdirSync(path.join(__dirname, `../components/test`))
    .map(p => `../components/test/${p}`);
  [...demoPaths, ...testPaths].forEach(demoPath => {
    const demo = fs.readFileSync(path.join(__dirname, demoPath)).toString();

    const componentsInDemo = demo.match(/a-(\w+(-\w+)*)/g) || [];
    componentsInDemo.forEach(name => {
      let componentName = camelize(name).replace(/^a/, '');

      const dirName = name.replace(/^a-/, '');
      const upperComponentDir = getUpper(dirName);
      const upperComponentName = upperComponentDir.replace(/^[a-z]/, $ => $.toUpperCase());
      const componentPath = path.join(__dirname, `../components/${dirName}`);
      if (fs.existsSync(componentPath)) {
        if (componentsInPrototype.includes(componentName)) {
          return;
        }
        components.WolfComponent[componentName] = dirName;
      } else if (fs.existsSync(path.join(__dirname, `../components/${upperComponentDir}`))) {
        components.WolfComponent['Wolf' + upperComponentName] = upperComponentDir;
      }
    });
  });

  const importComponents = generateEntry(components);
  const importStyles = generateStyles(components);
  const install = generateInstall(components);
  const template = replace(MAIN_TEMPLATE, {
    importComponents,
    importStyles,
    install,
    name,
  });
  fs.writeFileSync(OUTPUT_PATH, template);
};

function fsExistsSync(path) {
  try {
    fs.accessSync(path, fs.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}

if (!fsExistsSync(path.join(__dirname, '../components/test/index.vue'))) {
  if (!fsExistsSync(path.join(__dirname, '../components/test'))) {
    fs.mkdirSync(path.join(__dirname, '../components/test'));
  }
  fs.writeFileSync(path.join(__dirname, '../components/test/index.vue'), `<template></template>`);
}

let demoWatcher;

chokidar.watch(configPath, { ignoreInitial: true }).on('change', async () => {
  ({ componentName } = importFresh(configPath).dev);

  demoWatcher && (await demoWatcher.close());

  demoWatcher = chokidar.watch(path.join(__dirname, `../components/${componentName}/demo`));
  demoWatcher.on('change', () => {
    renderTemplate(componentName);
  });

  renderTemplate(componentName);
});

renderTemplate(componentName);

const compiler = webpack(devWebpack);

const configuration = devWebpack.devServer;

const server = new WebpackDevServer(compiler, configuration);
server.listen(configuration.port);