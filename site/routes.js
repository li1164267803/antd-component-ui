import Layout from './components/layout.vue';
import Iframe from './components/iframe.vue';
import demoRoutes from './demoRoutes';

export default [
  {
    path: '/components',
    component: Layout,
    props: route => {
      const name = route.path.split('/components/')[1].split('/')[0];
      return { name, showDemo: true };
    },
    children: demoRoutes,
  },
  {
    path: '/iframe',
    component: Iframe,
    children: demoRoutes.map(item => ({
      ...item,
      props: route => {
        const hash = route.hash.replace('#', '');
        return { iframeName: hash };
      },
    })),
  },
  {
    path: '/',
    component: Layout,
    props: route => {
      const name = route.path.split('/docs/vue/')[1].split('/')[0];
      return { name, showApi: true };
    },
    children: [
      {
        path: 'docs/vue/component-principle-cn',
        component: () => import('../docs/vue/component-principle.md'),
      },
      {
        path: 'docs/vue/how-write-component-cn',
        component: () => import('../docs/vue/how-write-component.md'),
      },
      {
        path: 'docs/vue/how-write-document-cn',
        component: () => import('../docs/vue/how-write-document.md'),
      },
      {
        path: 'docs/vue/how-build-document-cn',
        component: () => import('../docs/vue/how-build-document.md'),
      },
      {
        path: 'docs/vue/how-publish-component-cn',
        component: () => import('../docs/vue/how-publish-component.md'),
      },
      { path: '', redirect: '/docs/vue/how-write-document-cn/' },
      {
        path: 'docs/vue/intro-cn',
        component: () => import('../docs/vue/intro.md'),
      },
      {
        path: 'docs/vue/site-show-component-cn',
        component: () => import('../docs/vue/site-show-component.md'),
      },
      { path: '', redirect: '/docs/vue/intro-cn/' },
    ],
  },
  { path: '/*', redirect: '/docs/vue/intro-cn/' },
];
