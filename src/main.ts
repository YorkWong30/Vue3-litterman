import { createApp, toRaw, render } from 'vue'
import { createPinia } from 'pinia'

import type { Directive } from 'vue'
import App from './App.vue'
import router from './router'
import Card from './components/publicComponents/Card.vue'
import Gap from './components/publicComponents/Gap.vue'

import mitt from 'mitt'

import './assets/main.css'

import { loadingBarVue, loadingBarNode } from './components/loadingBar/laodingBar'
console.log('loadingBarNode...', loadingBarNode)
console.log('loadingBarVue...', loadingBarVue)

const app = createApp(App)

app.use(router)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Card', Card)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Gap', Gap)

const Mitt = mitt()
//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module 'vue' {
  export interface ComponentCustomProperties {
    $TheMitt: typeof Mitt
  }
}

app.config.globalProperties.$TheMitt = Mitt

//设置全局input的focus
app.directive('focus', (el, binding) => {
  el.focus()
})

//将pinia数据保存本地
const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

//从本地缓存中取
const getStorage = (key: string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}

type Options = {
  key?: string
}

//函数柯里化： 将函数返回给pinia，让pinia调用 注入contenxt
const myPiniaPlugin = (options: Options) => {
  return (context: PiniaPluginContext) => {
    console.log('context..', context)
    const { store } = context

    const data = getStorage(`${options.key}-${store.$id}`)
    console.log('data..', data)

    store.$subscribe(() => {
      console.log('store.$subscribe..')
      setStorage(`${options.key}-${store.$id}`, toRaw(store.$state))
    })
    return {
      //返回给pinia 的实例
      ...data
    }
  }
}
const store = createPinia()
store.use(
  myPiniaPlugin({
    key: 'pinia'
  })
)
app.use(store)

//路由前置守卫
//配置白名单
const whiteList = ['/']
router.beforeEach((to, from, next) => {
  console.log(to)
  document.title = to.meta.title;
  loadingBarNode?.component?.exposed?.startLoading()
  next()
  // if (whiteList.includes(to.path)) {
  //   next()
  // } else {
  //   next('/')
  //   console.log(`${from.path} is not belong whiteList`)
  // }
})

//路由后置守卫
router.afterEach((to, from) => {
  setTimeout(() => {
    loadingBarNode?.component?.exposed?.stopLoading()
  }, 1000)
})

app.mount('#app')
