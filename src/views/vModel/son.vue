<template>
  <div class="content">
    <div>son</div>
    <div class="son-box" v-if="propsData.modelValue">
      <div>
        <button @click="close">close father</button>
      </div>
      <input type="text" @input="change" :value="propsData.title" />
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { ref, reactive } from 'vue'
type Props = {
  modelValue: boolean,
  title: string

}
const propsData = defineProps<Props>();
const emit = defineEmits(['update:modelValue', 'update:title'])
const close = () => {
  emit('update:modelValue', false)
}
console.log('propsData..', propsData);
const change = (e: any) => {
  console.log(e.target);
  emit('update:title', e.target.value)

}

</script>
  
  
<style  scoped>
.content {
  width: 100%;
}

.son-box {
  widows: 200px;
  min-height: 200px;
  border: 2px solid lightblue;
}
</style>
    