<template>
    <gap></gap>

    <div>
        <h1>鉴权</h1>
        <button v-has-show="'shop:create'">创建</button>
        <button v-has-show="'shop:edit'">编辑</button>
        <button v-has-show="'shop:edit'">修改</button>

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
</template>
    
<script setup lang="ts">
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

//自定义指令鉴权
const vHasShow: Directive<HTMLElement, string> = (el, binding) => {
    console.log('(el, binding)..', el, binding);

    if (!permission.includes(`${userId}:${binding.value}`)) {
        el.style.display = 'none';
    }

}

//自定义指令 推拽
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
    