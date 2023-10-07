<template>
  <div>
    <div>{{ state }}</div>
    <button @click="toggle()">toggle</button>
    <button @click="setFalse()">setFalse</button>
    <button @click="setTrue()">setTrue</button>
  </div>
</template>

<script setup lang="ts">
import { useBoolean } from 'vue-uses'
const [state, { toggle, setFalse, setTrue }] = useBoolean()
</script>
