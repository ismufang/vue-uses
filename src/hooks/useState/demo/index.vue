<template>
  <div>{{ state }}</div>
  <button @click="setState(5)">setState(5)</button>
  <button @click="setState(c => c + 1)">+</button>
  <button @click="setState(c => c - 1)">-</button>
</template>

<script lang="ts" setup>
import { useState } from 'vue-uses'
const [state, setState] = useState(1)
</script>
