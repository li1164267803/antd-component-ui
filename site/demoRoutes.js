// TODO: 3. 添加组件路由

export default [
  
  {
    path: 'tooltip-cn',
    component: () => import('../components/tooltip/demo/index.vue'),
  },
  {
    path: 'order-cn',
    component: () => import('../components/order/demo/index.vue'),
  },
];
