# useEffectOnce

A lifecycle function only during the `mounted` and `beforeUnmount` phases.

## Usage

```ts
import { useEffectOnce } from 'vue-uses'
useEffectOnce(() => {
  console.log('mounted 执行')
  return () => {
    console.log('beforeUnmount 执行')
  }
})
```

## Reference

### Type Declarations

```ts
export declare function useEffectOnce(effect: EffectCallback): void
```
