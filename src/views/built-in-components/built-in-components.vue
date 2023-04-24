<template>
  <div class="content">
    <Gap></Gap>
    <h1>Teleport</h1>
    <button @click="open = true">Open Modal</button>
    <div class="the-in-modal"></div>
  </div>

  <!-- 把以下模板片段传送到 .the-in-modal 标签下 -->
  <Teleport to=".the-in-modal">
    <div v-if="open" class="modal">
      <p>HELLO WORLD</p>
      <button @click="open = false">close Modal</button>
    </div>
  </Teleport>
  <Teleport to=".the-in-modal">
    <div>a</div>
  </Teleport>
  <Teleport to=".the-in-modal">
    <div>b</div>
  </Teleport>

  <Gap></Gap>

  <h1>KeepAlive</h1>
  <div>
    <div v-for="(item, index) in activeComponentsArr" :key="index" @click="changeCurrentCom(item)">
      {{ item.name }}
    </div>
    <div>当前显示的组件： {{ currentCom.name }}</div>
    <keep-alive>
      <component :is="currentCom.com"></component>
    </keep-alive>
  </div>
  <Gap></Gap>

  <h1>Transition</h1>
  <h2>(1)基础用法</h2>
  <div>
    <button @click="showAni = !showAni">change Transition</button>
    <transition name="slide-fade">
      <p v-if="showAni">Hello Transition!</p>
    </transition>
  </div>
  <h2>(2)CSS的animation</h2>
  <div>
    <button @click="showAni = !showAni">change Transition</button>
    <transition name="bounce">
      <p style="text-align: center" v-if="showAni">Hello Transition!</p>
    </transition>
  </div>

  <h2>(3)使用第三方动画库animate.css</h2>
  <div>
    <button @click="showAni = !showAni">change Transition</button>
    <transition
      name="custom-classes"
      enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__backInDown"
    >
      <p style="text-align: center" v-if="showAni">Hello Transition!</p>
    </transition>
  </div>

  <h2>(4)使用第三方动画库gasp</h2>
  <div>
    <button @click="showAni = !showAni">change Transition</button>
    <transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <p v-if="showAni">使用第三方动画库gasp</p>
    </transition>
  </div>

  <Gap></Gap>
  <h1>Transition Group</h1>
  <div style="height: 500px">
    <button @click="add">add</button>
    <button @click="minus">minus</button>
    <button @click="random">random</button>

    <div>
      <TransitionGroup tag="ul" name="fade" class="container">
        <div v-for="item in items" class="the-span" :key="item">
          {{ item }}
        </div>
      </TransitionGroup>
    </div>
  </div>
  <Gap></Gap>

</template>
<script setup lang="ts">
import {  reactive, ref } from 'vue'
import _ from 'lodash'
//Teleport------------------------
let open = ref<boolean>(false)

//KeepAlive------------------------
import keepA from './keep-alive-components/keep-a.vue'
import keepB from './keep-alive-components/keep-b.vue'
type T = {
  name: string
  com: any
}
const activeComponentsArr = reactive<Array<T>>([
  { name: 'keepA', com: keepA },
  { name: 'keepB', com: keepB }
])
let currentCom = ref<any>({ name: 'keepA', com: keepA })
const changeCurrentCom = (item: any): void => {
  currentCom.value = item
}

//Transition------------------------
import 'animate.css'
const showAni = ref<boolean>(false)

import gsap from 'gsap'
//在元素被插入到DOM之前被调用
//可以用来设置元素的enter-form状态
const onBeforeEnter = (el: any) => {
  console.log('在元素被插入到DOM之前被调用onBeforeEnter...', el)
  gsap.set(el, { width: 0 })
}

//元素被插入到DOM之后的下一帧调用
//用来开始进入动画
const onEnter = (el: any, done: any) => {
  gsap.to(el, { width: 200, onComplete: done })
}

//在离开过渡开始时调用
//用这个来开始离开动画
const onLeave = (el: any, done: any) => {
  gsap.to(el, { width: 0, onComplete: done })
}

const getInitialItems = () => [1, 2, 3, 4, 5]
const items = ref<number[]>([1, 2, 3, 4, 5])
const add = () => {
  items.value.push(items.value.length + 1)
}
const minus = () => {
  items.value.pop()
}

const random = () => {
  items.value = _.shuffle(items.value)

  console.log('items..', items.value)
}
</script>


<style  scoped>
.content {
  width: 100%;
  overflow-x: hidden;
}
.the-in-modal {
  width: 600px;
  position: relative;
  height: 600px;
  margin: 0 auto;
  background-color: #fff;
  border: 2px solid #00000026;
}
.modal {
  transition: background-color 0.5s ease;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  padding: 30px;
  width: 300px;
  background-color: lightcoral;
  border-radius: 8px;
  box-shadow: 0 4px 16px #00000026;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.bounce {
  width: 200px;
  height: 100px;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2.25);
  }
  100% {
    transform: scale(1);
  }
}

.the-span {
  font-size: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #00000026;
  background-color: cadetblue;
  color: #fff;
  border-radius: 20px;
  padding: 0 20px;
  display: inline-block;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
    