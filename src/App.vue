<template>
  <div class="content">

    <div class="nav-div">
      <button v-for="(item, index) in navList" :key="index" class="nav-button">
        <!-- 方法一 -->
        <!-- <RouterLink :to="`/${item.path}`">{{ item.name }}</RouterLink> -->

        <!-- 方法二 -->
        <RouterLink :to="{ name: `${item.path}` }">{{ item.name }}</RouterLink>

        <!-- 方法三 -->
      </button>
    </div>
    <div class="main-div">
      <router-view #default="{ route, Component }">
        <Transition :enter-active-class="`animate__animated  ${route.meta.animate}`">
          <component :is="Component"></component>
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import 'animate.css'

const navList = ref([
  {
    name: 'Home',
    path: 'home'
  },
  {
    name: '购物车',
    path: 'computedShopCar'
  },
  {
    name: '关于组件',
    path: 'aboutComponents'
  },
  {
    name: '内置组件',
    path: 'builtInComponents'
  },
  {
    name: '依赖注入',
    path: 'provideInject'
  },
  {
    name: '手写发布订阅 ',
    path: 'bus'
  },
  {
    name: 'Mitt',
    path: 'mitt'
  }, {
    name: 'v-model组件',
    path: 'vModel'
  }, {
    name: '自定义指令',
    path: 'customDirectives'
  }, {
    name: 'dynamics.js',
    path: 'useDynamics'
  }, {
    name: 'hooks',
    path: 'hooks'
  }, {
    name: 'style-plugin',
    path: 'style-plugin'
  },
  {
    name: 'pinia',
    path: 'pinia'
  }, {
    name: 'vue-router',
    path: 'vue-router'
  },
])
</script>



<style scoped>
/* 全局样式选择器 */
/* :global(div){
  color: pink;
} */
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
  padding: 2px 5px;
  border: none;
  border-radius: 40px;
  color: #000000 !important;
  margin-right: 10px;
  margin-top: 10px;
}

.nav-button a {
  font-weight: bold;
  font-size: 12px;
}

.main-div {
  width: 100%;
  /* height: calc(100vh - 50px); */
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
