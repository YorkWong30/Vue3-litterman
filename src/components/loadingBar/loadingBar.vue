<template>
    <div class="line">
        <div ref="bar" class="bar"></div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { ref, defineExpose } from 'vue'
let speed = ref<number>(1);
let bar = ref<HTMLElement>();


let timer = ref<number>(0);

const startLoading = () => {
    console.log('startLoading');
    speed.value = 1;
    let barDom = bar.value as HTMLElement;
    let timer = window.requestAnimationFrame(function fn() {
        if (speed.value < 90) {
            speed.value += 1;
            barDom.style.width = `${speed.value}%`
            window.requestAnimationFrame(fn)
        } else {
            speed.value = 1;
            window.cancelAnimationFrame(timer)
        }
    })

}
const stopLoading = () => {
    console.log('stopLoading');
    let barDom = bar.value as HTMLElement;
    window.requestAnimationFrame(() => {
        speed.value = 100;
        barDom.style.width = `${speed.value}%`



    })


}
defineExpose({
    startLoading,
    stopLoading
})
</script>
<style lang="less" scoped>
.line {
    width: 100%;
    height: 2px;
    position: fixed;
    top: 0;

    .bar {
        background-color: blue;
        width: 0;
        height: inherit;
    }
}
</style>