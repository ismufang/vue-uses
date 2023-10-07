<template>
  <div>Please open console</div>
</template>

<script lang="ts" setup>
import { useEffectOnce } from 'vue-uses'
useEffectOnce(() => {
  console.log('mounted')
  return () => {
    console.log('beforeUnmount')
  }
})
</script>
