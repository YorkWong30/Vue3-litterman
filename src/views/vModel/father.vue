<template>
  <div class="content">
    <div>father</div>
    <button @click="show = !show">开关{{ show }}</button>
    <div>title:{{ title }}</div>

    <gap></gap>

    <son v-model="show" v-model:title="title"></son>
  </div>
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
import son from './son.vue'
const show = ref<boolean>(true);
const title = ref<string>('title');

</script>
  
  
<style  scoped>
.content {
  width: 100%;
}
</style>
    