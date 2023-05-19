import { createVNode, render } from 'vue'
import loadingBarVue from './loadingBar.vue'

const loadingBarNode = createVNode(loadingBarVue)
export { loadingBarVue, loadingBarNode }
render(loadingBarNode, document.body)
