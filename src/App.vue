<template>
  <div class="content">
    <div class="nav-div">
      <button v-for="(item, index) in navList" :key="index" class="nav-button">
        <RouterLink :to="`/${item.path}`">{{ item.name }}</RouterLink>
      </button>
    </div>
    <div class="main-div">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const navList = ref([
  {
    name: 'Home',
    path: ''
  },
  {
    name: '购物车',
    path: 'computedShopCar'
  },
  {
    name: '关于组件',
    path: 'aboutComponents'
  }
])
</script>



<style scoped>
.content {
  width: 100%;
}
.nav-div {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px dashed #d5cfcf;
  padding: 20px;
}
.nav-button {
  padding:2px 5px;
  border: none;
  border-radius: 40px;
  color: #000000 !important;
  margin-right: 10px;
}
.nav-button a{
  font-weight: bold;
  font-size: 12px;
}
.main-div {
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: auto;
}
</style>
