import Vue from 'vue';

// TODO: 1. 注册组件
import {
  Tooltip,
} from 'wolf-antd';

// Vue.prototype.$message = message;
// Vue.prototype.$notification = Notification;
// Vue.prototype.$info = Modal.info;
// Vue.prototype.$success = Modal.success;
// Vue.prototype.$error = Modal.error;
// Vue.prototype.$warning = Modal.warning;
// Vue.prototype.$confirm = Modal.confirm;
// Vue.prototype.$destroyAll = Modal.destroyAll;

Vue.use(Tooltip);

console.log(require('wolf-antd'));
