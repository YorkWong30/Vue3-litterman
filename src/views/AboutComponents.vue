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
  </div>
</template>
  <script setup lang="ts">
import { ref, reactive } from 'vue'
import Recursion from './components/Recursion.vue'
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
</script>
  <style  scoped>
.content {
  width: 100%;
}
</style>
  