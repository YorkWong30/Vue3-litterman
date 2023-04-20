<template>
  <div class="content">
    <div
      class="content-item"
      @click.stop="cItem(item)"
      v-for="(item, index) in props.theListData"
      :key="index"
    >
      {{ item.name }}
      <div v-if="item?.children?.length">
        <Recursion :theListData="item.children"></Recursion>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { ref, reactive } from 'vue'
export interface Tree {
  name: string
  children?: Tree[] | []
}
type theProps<T> = {
  theListData?: T[] | []
}
const props = defineProps<theProps<Tree>>()

const cItem = (item: Tree) => {
  console.log(item)
}
</script>

<script lang="ts">
export default {
  name: 'Recursion'
}
</script>


  <style lang="less"  scoped>
.content {
  width: 100%;
  &-item {
    margin-left: 10px;
  }
}
</style>
  