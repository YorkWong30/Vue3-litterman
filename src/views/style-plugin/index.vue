<template>
    <div class="content">
        <h1>改变slot的样式</h1>
        <A>
            <div class="a">AAAA</div>
        </A>
        <Gap></Gap>
        <h1>动态css</h1>
        <div class="active-css">
            active-css
        </div>
    </div>
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
import A from './components/A.vue';

const activeCss = ref({
    color: 'blue'
});
setTimeout(() => {
    activeCss.value.color = 'red';
}, 2000);
</script>
  
  
<style  scoped>
.content {
    width: 100%;
}

.active-css {
    color: v-bind('activeCss.color');
}
</style>
    