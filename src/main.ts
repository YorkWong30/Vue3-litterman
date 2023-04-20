import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Card from './components/publicComponents/Card.vue'
import Gap from './components/publicComponents/Gap.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Card', Card)
app.component('Gap', Gap)

app.mount('#app')
