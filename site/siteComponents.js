import Vue from 'vue';
import {
  Affix,
  Anchor,
  BackTop,
  Col,
  Icon,
  Layout,
  LocaleProvider,
  message,
  Menu,
  Row,
  Tree,
  TreeSelect,
  Tooltip,
  ConfigProvider,
  Base,
  Button,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// import Antd from 'ant-design-vue';
// Vue.use(Antd);

// Vue.prototype.$message = message;
// Vue.prototype.$notification = Notification;
// Vue.prototype.$info = Modal.info;
// Vue.prototype.$success = Modal.success;
// Vue.prototype.$error = Modal.error;
// Vue.prototype.$warning = Modal.warning;
// Vue.prototype.$confirm = Modal.confirm;
// Vue.prototype.$destroyAll = Modal.destroyAll;

// /* v1.1.3+ registration methods */
Vue.use(Base);
Vue.use(Affix);
Vue.use(Anchor);
Vue.use(BackTop);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Button);

Vue.use(Layout);

// Vue.use(LocaleProvider);
Vue.use(Menu);
Vue.use(Row);
// Vue.use(Tree);
// Vue.use(TreeSelect);

Vue.use(Tooltip);

// Vue.use(ConfigProvider);
