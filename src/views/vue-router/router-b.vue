<template>
    <div class="content">router-b</div>
    {{ route.query }}
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();
</script>
  
  
<style  scoped>
.content {
    width: 100%;
}
</style>
    