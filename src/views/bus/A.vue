<template>
    <div class="content">A</div>
    <button @click="emitFn">派发事件</button>
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
import Bus from './Bus'
const emitFn = () => {
    Bus.emit('on-click', '我来自A组件');
}
</script>
  
  
<style  scoped>
.content {
    width: 100%;
}
</style>
    