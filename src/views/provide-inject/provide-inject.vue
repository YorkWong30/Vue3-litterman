<template>
  <div class="content">
    <button>我是爸爸</button>
    <son></son>
  </div>
</template>
    
  <script setup lang="ts">
import { ref, reactive, provide } from 'vue'
import son from './son.vue'
let flag = ref<number>(1);
provide('flag',flag);

</script>
  
  
  <style  scoped>
.content {
  width: 100%;
}
</style>
    