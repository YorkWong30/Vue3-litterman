<template>
    <div class="content">B</div>
    <div>{{ arr }}</div>
</template>
    
<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { ref, reactive } from 'vue'
const instance = getCurrentInstance();
let arr = reactive<any[]>([]);
instance?.proxy?.$TheMitt.on('mitt-on', (args) => {
    console.log(args);
    arr.push(args);
})
</script>
  
  
<style  scoped>
.content {
    width: 100%;
}
</style>
    