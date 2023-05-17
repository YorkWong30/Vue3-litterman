<template>
  <div class="the-a">
    <slot></slot>
  </div>
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
  
  
<style  scoped>
.content {
  width: 100%;
}
/* 子组件中修改父组件中slot进入的元素 */
:slotted(.a) {
  color: red;
}
</style>
    