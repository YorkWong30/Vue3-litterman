import { createApp } from 'vue'
import { createPinia } from 'pinia'
import type { Directive } from 'vue'
import App from './App.vue'
import router from './router'
import Card from './components/publicComponents/Card.vue'
import Gap from './components/publicComponents/Gap.vue'

import mitt from 'mitt'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
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

app.mount('#app')
