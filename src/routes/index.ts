import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export { router };
