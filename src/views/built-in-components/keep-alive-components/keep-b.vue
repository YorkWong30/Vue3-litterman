<template>
  <div class="content">keep-b</div>
  <input type="text" v-model="str" />
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
let str = ref<string>(0)
</script>
  
  
<style  scoped>
.content {
  width: 100%;
}
</style>
    