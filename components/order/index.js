import Order from './order';
Order.install = function(Vue) {
  Vue.component(Order.name, Order);
  Vue.component(Order.OrderItem.name, Order.OrderItem);
};
export default Order;
