<template>
    <gap></gap>
    <h1>vValue</h1>
    <div><input type="text" v-value v-focus></div>
    <gap></gap>

    <div>
        <h1>鉴权</h1>
        <button v-power="'shop:create'">创建</button>
        <button v-power="'shop:edit'">编辑</button>
        <button v-power="'shop:edit'">修改</button>

    </div>
    <gap></gap>
    <h1>拖拽</h1>
    <div>
        <div class="move-box" v-move>

        </div>
    </div>
    <!-- <div>
        <div class="move-box" v-move>

        </div>
    </div> -->
    <gap></gap>
    <h1>图片懒加载</h1>
    <div>
        <div v-for="item in arr" :key="item">
            <img height="500" :data-index="item" v-lazy="item" width="360" alt="">
        </div>
    </div>
    <gap></gap>
</template>
    
<script setup lang="ts">
import { entries } from 'lodash-es';
import { ref, reactive, } from 'vue'
import Directive from 'vue';
localStorage.setItem('userId', '110');

//mock模拟返回后端数据
const permission = [
    '110:shop:edit',
    '110:shop:delete',
    // '110:shop:create',
]

const userId = localStorage.getItem('userId') as string;

//自定义指令案例1：鉴权
const vPower: Directive<HTMLElement, string> = (el, binding) => {
    if (!permission.includes(`${userId}:${binding.value}`)) {
        el.style.display = 'none';
    }
}

//自定义指令案例2： 推拽
const vMove: Directive = {
    mounted(el: HTMLElement) {
        let moveEl = el as HTMLElement;
        const mouseDown = (e: MouseEvent) => {
            //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
            console.log(e.clientX, e.clientY, "-----起始", el.offsetLeft);
            let X = e.clientX - el.offsetLeft;
            let Y = e.clientY - el.offsetTop;
            const move = (e: MouseEvent) => {
                el.style.left = e.clientX - X + "px";
                el.style.top = e.clientY - Y + "px";
                console.log(e.clientX, e.clientY, "---改变");
            };
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", move);
            });
        };
        moveEl.addEventListener("mousedown", mouseDown);
    },
};


//自定义指令案例3：图片懒加载
const imagesList = import.meta.glob('@/assets/directivesImages/*.jpg', { eager: true })
console.log('imagesList..', imagesList);

let arr = Object.keys(imagesList)
console.log('arr..', arr);

let vLazy: Directive<HTMLImageElement, string> = async (el: any, binding: any) => {
    //设置默认加载图片
    let url = await import('@/assets/directivesImages/empty.png')
    el.src = url.default;

    let observer = new Observer((entries) => {
        console.log('el..', el);

        console.log(entries[0].isIntersecting);
        //isIntersecting<boolean>是否在可视区域
        if (entries[0].intersectionRatio > 0 && entries[0].isIntersecting) {
            setTimeout(() => {
                el.src = binding.value;
                observer.unobserve(el);
            }, 500)
        }

    })
    observer.observe(el);
}

//默认给input写入value
const vValue: Directive = (el, binding) => {
    console.log('vValue..', el, binding);
    el.value = '自定义指令input value'

}
</script>
  
  
<style  scoped>
.content {
    width: 100%;
}

.move-box {
    width: 100px;
    height: 100px;
    border: 10px solid rebeccapurple;
}
</style>
    