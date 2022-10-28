import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'
import HomeView from '../views/HomeView.vue'

import Product from '../views/Product.vue'
import Products from '../views/Products.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart'
import SignUp from '../views/SignUp'
import LogIn from '../views/Login'
import Order from '../views/Order'
import MyAccount from '../views/Profile'
import Checkout from '../views/Checkout'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,

    meta: {
      requireLogin: true
    }
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/product/:product_slug',
    name: 'Product Slug',
    component: Product
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/cart/checkout',
    name: 'Checkout',
    component: Checkout,

    meta: {
      requireLogin: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(records => records.meta.requiredLogin) && !store.state.isAuthenticated) {
    next({
      name: 'LogIn',
      query: { to: to.path }
    });
  } else {
    next()
  }
})

export default router
