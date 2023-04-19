<template>
  <div class="content">
    <table border="true" style="width: 800px">
      <tr>
        <th>NAME</th>
        <th>NUM</th>
        <th>单价</th>

        <th>PRICE</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in goodsList" :key="index">
        <td align="center">{{ item.name }}</td>
        <td align="center">
          <button @click="minus(item)">-</button>{{ item.num
          }}<button @click="plus(item)">+</button>
        </td>
        <td align="center">{{ item.price }}</td>

        <td align="center">{{ item.price * item.num }}</td>
        <td align="center"><button @click="del(index)">删除</button></td>
      </tr>
      <tr>
        <td align="center" colspan="2">总价：</td>
        <td align="center" colspan="3">{{ $total }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
type Good = {
  name: string
  num: number
  price: number //单价
}
const goodsList = reactive<Good[]>([
  {
    name: '鞋子',
    num: 1,
    price: 10
  },
  {
    name: '裤子',
    num: 3,
    price: 210
  },
  {
    name: '衣服',
    num: 5,
    price: 110
  },
  {
    name: '袜子',
    num: 33,
    price: 30
  }
])
const minus = (item: Good): void => {
  if (item.num > 1) {
    item.num--
  }
}
const plus = (item: Good): void => {
  item.num++
}
const del = (index: number): void => {
  goodsList.splice(index, 1)
}
//计算总价
let $total = ref<number>(0)
// eslint-disable-next-line vue/no-ref-as-operand
$total = computed<number>(() => {
  return goodsList.reduce((prev, next) => {
    return prev + next.num * next.price
  }, 0)
})
</script>
<style  scoped>
.content {
  width: 100%;
}
</style>
