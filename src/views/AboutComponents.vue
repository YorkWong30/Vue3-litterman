<template>
  <div class="content">
    <Gap></Gap>

    <div>
      <h1>全局组件的挂载：</h1>
      <p>注意： 需要在main.ts文件中对全局组件进行注册。 且要在mount之前注册。</p>
      <p>app.component('Card', Card)</p>
      <p>app.mount('#app')</p>
      <Card content="i am contents"></Card>
    </div>
    <Gap></Gap>
    <div>
      <h1>递归组件</h1>
      <Recursion :theListData="recursionData"></Recursion>
    </div>
    <Gap></Gap>
    <h1>动态组件[搭配transition]</h1>
    <div>
      <span
        @click="changCom(item)"
        style="border: 2px solid #000000; margin-right: 20px"
        v-for="(item, index) in componentsList"
        :key="index"
        >{{ item.name }}</span
      >
      <transition appear name="slide-fade" mode="out-in">
        <component :is="comId"></component>
      </transition>
    </div>
    <Gap></Gap>
   
  </div>
</template>
  <script setup lang="ts">
import { ref, reactive } from 'vue'
import Recursion from './components/Recursion.vue'

import AVue from './components/a-vue.vue'
import BVue from './components/b-vue.vue'

interface TreeList {
  name: string
  children?: TreeList[] | []
}
const recursionData = reactive<TreeList[]>([
  {
    name: 'no.1',
    children: [
      {
        name: 'no.1-1',
        children: [
          {
            name: 'no.1-1-1'
          }
        ]
      }
    ]
  },
  {
    name: 'no.2',
    children: [
      {
        name: 'no.2-1'
      }
    ]
  },
  {
    name: 'no.3'
  }
])

const componentsList = reactive([
  {
    name: 'aVue',
    com: AVue
  },
  {
    name: 'bVue',
    com: BVue
  }
])
const comId = ref(AVue)
const changCom = (item) => {
  comId.value = item.com
}
</script>
  <style  scoped>
.content {
  width: 100%;

}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
  