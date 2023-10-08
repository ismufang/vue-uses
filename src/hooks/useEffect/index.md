# useEffect

Conveniently managing component lifecycle, running a function immediately, tracking its dependencies reactively, and re-executing when dependencies change.

## Usage

```ts
// onMount、onBeforeUnmount
useEffect(() => {
  console.log('mounted')
  return () => {
    console.log('beforeUnmount')
  }
}, [])

// onUpdated
useEffect(() => {
  console.log('updated')
})

// watch state
useEffect(() => {
  console.log('watch state:', state)
}, [state])
```

## Reference

### Type Declarations

```ts
declare const UNDEFINED_VOID_ONLY: unique symbol
export declare type Destructor = () => void | {
  [UNDEFINED_VOID_ONLY]: never
}
export declare type EffectCallback = () => void | Destructor
export declare type DependencyList = ReadonlyArray<any>
export declare function useEffect(
  effect: EffectCallback,
  deps?: DependencyList
): void
```
