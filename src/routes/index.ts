import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import { routes } from './routes';
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  NProgress.start();
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return {
      path: '/auth/login',
      query: {
        next: to.fullPath,
        notify: 'true',
      },
    };
  }
});

router.afterEach(() => {
  NProgress.done();
});

export { router };
