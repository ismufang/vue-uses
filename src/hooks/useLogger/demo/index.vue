<template>
  <div>
    Please open console
    <div>name: {{ name }}</div>
    <button @click="setName('test1')">update props</button>
    <Demo1 :name="name" />
  </div>
</template>

<script lang="ts" setup>
import { useState } from 'vue-uses'
import Demo1 from './demo1.vue'

// const props = defineProps({
//   name: {
//     type: String,
//     default: 'test'
//   }
// })
const [name, setName] = useState('test')
</script>
