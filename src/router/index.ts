import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    animate?: string
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  scrollBehavior: (to, from, savePosition) => {
    console.log('savePosition..', savePosition)
    if (savePosition) {
      return savePosition
    } else {
      return {
        top: 0
      }
    }
    //使用异步跳转
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       top: 9999999
    //     })
    //   }, 2000)
    // })
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '首页',
        animate: 'animate__zoomIn'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/computedShopCar',
      name: 'computedShopCar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComputedShopCar.vue'),
      meta: {
        title: '购物车',
        animate: 'animate__zoomIn'
      }
    },
    {
      path: '/aboutComponents',
      name: 'aboutComponents',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutComponents.vue')
    },
    {
      path: '/builtInComponents',
      name: 'builtInComponents',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/built-in-components/built-in-components.vue')
    },
    {
      path: '/provideInject',
      name: 'provideInject',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/provide-inject/provide-inject.vue')
    },
    {
      path: '/bus',
      name: 'bus',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/bus/bus-index.vue')
    },
    {
      path: '/mitt',
      name: 'mitt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/mitt/mitt-index.vue')
    },
    {
      path: '/vModel',
      name: 'vModel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/vModel/father.vue')
    },
    {
      path: '/customDirectives',
      name: 'customDirectives',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/custom-directives/index.vue'),
      meta: {
        title: '自定义指令'
      }
    },
    {
      path: '/useDynamics',
      name: 'useDynamics',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/use-dynamics/index.vue')
    },
    {
      path: '/hooks',
      name: 'hooks',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/hooks/index.vue')
    },
    {
      path: '/style-plugin',
      name: 'style-plugin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/style-plugin/index.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pinia/pinia.vue')
    },
    {
      path: '/vue-router',
      name: 'vue-router',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/vue-router/vue-router.vue')
    },
    {
      path: '/router-b',
      name: 'router-b',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/vue-router/router-b.vue')
    }
  ]
})

export default router
