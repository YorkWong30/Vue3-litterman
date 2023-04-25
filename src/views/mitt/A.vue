<template>
    <div class="content">A</div>
    <button @click="emitFn">派发事件</button>
</template>
    
<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from 'vue'
const instance = getCurrentInstance();
const emitFn = () => {
    instance?.proxy?.$TheMitt.emit('mitt-on', '来自mitt的A组件')
}
</script>
  
  
<style  scoped>
.content {
    width: 100%;
}
</style>
    