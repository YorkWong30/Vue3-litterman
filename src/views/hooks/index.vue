<template>
    <Gap></Gap>

    <h1>vue use的使用</h1>
    <button class="stainless-steel-button" @click="copy(source)">copy</button>
    <input type="text" v-model="source">
    copied： {{ copied }}
    <Gap></Gap>
    <h1>自定义img2base64的hooks</h1>
    <div>
        <img id="img" width="200" height="200" src="src/assets/a.jpg" alt="">
    </div>
    <div style="overflow-x: scroll;">
        {{ currentBase64Url }}
    </div>
    <Gap></Gap>
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useClipboard } from '@vueuse/core'
const source = ref('Hello');
const { text, copy, copied, isSupported } = useClipboard({ source })
console.log('text, copy, copied, isSupported..', text, copy, copied, isSupported);


// <h1>vue use的使用</h1>
import useBase64 from './self-hooks/useBase64';
let currentBase64Url = ref('');
useBase64({
    el: 'img'
}).then(res => {
    console.log(res.baseURL);
    currentBase64Url.value = res.baseURL;
})


</script>
  
  
<style  scoped>
.content {
    width: 100%;
}
.stainless-steel-button {
  background-color: #f2f2f2;
  border: none;
  color: #333;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.stainless-steel-button:hover {
  background-color: #e6e6e6;
  cursor: pointer;
}
</style>
