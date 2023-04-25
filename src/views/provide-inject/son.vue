<template>
  <div class="content">
    <div>我是儿子</div>
    <div>来自爸爸的flag： {{ flag }}</div>

    <button @click="change">Change Flag</button>
  </div>
</template>
    
<script setup lang="ts">
import { ref,  inject } from 'vue'
//ref(1)是默认值
const flag = inject('flag', ref(1))

const change = (): void => {
  flag.value = 2;
}
</script>
  
  
<style  scoped>
.content {
  width: 100%;
}
</style>
    