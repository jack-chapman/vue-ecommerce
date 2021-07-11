import { RouteRecordRaw } from 'vue-router';
import Home from '../pages/Index.vue';
const Shop = () => import('../pages/shop/Index.vue');
const Product = () => import('../pages/shop/Product.vue');
const Basket = () => import('../pages/shop/Basket.vue');
const Orders = () => import('../pages/orders/Index.vue');
const Order = () => import('../pages/orders/Order.vue');
const NotFound = () => import('../pages/NotFound.vue');
const Auth = () => import('../pages/auth/Index.vue');
const LogIn = () => import('../pages/auth/LogIn.vue');
const SignUp = () => import('../pages/auth/SignUp.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    alias: '/home',
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
  },
  {
    path: '/shop/:product',
    name: 'product',
    component: Product,
  },
  {
    path: '/shop/basket',
    name: 'basket',
    component: Basket,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: ':order',
        component: Order,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
    children: [
      {
        path: 'login',
        component: LogIn,
      },
      {
        path: 'signup',
        component: SignUp,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: '404',
  },
];
