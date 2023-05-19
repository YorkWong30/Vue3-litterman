<template>
    <div class="content">
        <h1>编程式导航push()</h1>
        <button @click="toPage('pinia')">去pinia</button>
        <Gap></Gap>
        <h1>replace</h1>
        <button @click="replace('pinia')">replace pinia</button>
        <Gap></Gap>
        <h1>路由传参</h1>
        <button @click="toRouterB">传参给router-b</button>

    </div>
</template>
    
<script setup lang="ts">
import type GapVue from '@/components/publicComponents/Gap.vue';
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();
console.log('router..', router);

const toPage = (url: string) => {
    // 1. 字符串路径: 
    router.push(url)

    // 2. 带有path的对象: router.push({path: url })

    //3. 命名的路由，并加上参数，让路由建立url:  router.push({ name: 'pinia', params: { isfrom: 0 } })

    // 4.带查询的参数，结果是/url?isPinia=1: router.push({ name: 'pinia', query: { isPinia: 1 } })

    // 5.带hash，结果是/url#twopart: 
    // router.push({ path: 'url', hash: '#twopart' })
}


const replace = (url: string) => {
    router.replace(url);
}


const toRouterB = () => {
    let item = {
        b: 0,
        a: 1
    }
    router.push({
        path: 'router-b',
        query: item
    })
}
</script>
  
  
<style  scoped>
.content {
    width: 100%;
}
</style>
    