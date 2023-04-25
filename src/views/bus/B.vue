<template>
    <div class="content">B</div>
    接受事件
    {{ pageInfo }}
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
import Bus from './Bus'
let pageInfo = reactive<string[]>([]);
Bus.on('on-click', (args: any) => {
    console.log('args', args);
    pageInfo.push(args);
})
</script>
  
  
<style  scoped>
.content {
    width: 100%;
}
</style>
    