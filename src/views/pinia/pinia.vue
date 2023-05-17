<template>
    <div class="content">
        pinia {{ Test.current }}--{{ Test.name }}
        <button @click="change">change</button>
        <gap></gap>


        <h1>使用storeToRefs解决问题： pinia解构后失去响应式</h1>
        {{ current }} -- {{ name }}
        <gap></gap>


        <h1>异步actions 和 getters的使用</h1>
        <h2>{{ Test.tip }}</h2>

        <h2>{{ Test.getterTip }}</h2>
        <button @click="changeTip">触发异步actions</button>
        <gap></gap>


        <h1>$reset</h1>
        <button @click="reset">$reset</button>
        <gap></gap>


        <h1>$subscribe</h1>
        Test.$subscribe((args, state) => {  })
        <gap></gap>


    </div>
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useTestStore } from '@/stores'
const Test = useTestStore();
//修改state中的值
// 1. 直接修改  Test.current = 2;
//2. 使用$patch对state进行批量修改  Test.$patch({ current: 33, name: '333333' })
//3. $patch函数写法  Test.$patch((state) => {state.current = 1 })
// 4.使用actions  Test.setCurrent();
const change = () => {
    Test.setCurrent(111);
}


import { storeToRefs } from 'pinia';
const { current, name } = storeToRefs(useTestStore());


const changeTip = () => {
    Test.setLogin();
}


const reset = () => {
    Test.$reset();
}

Test.$subscribe((args, state) => {
    console.log('args===>', args);
    console.log('state===>', state);


})
</script>
  
  
<style  scoped>
.content {
    width: 100%;
}
</style>
    