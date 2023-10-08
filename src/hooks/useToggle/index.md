# useToogle

Toggling between two states.

## Usage

```ts
import { useToggle } from 'vue-uses'
const [state, { toggle, set, setLeft, setRight }] = useToggle('L', 'R')
```

## Reference

```ts
const [state, actions] = useToggle<T, R>(defaultValue?: T, reverseValue?: R)
```

### Type Declarations

```ts
export interface Actions<T> {
  setLeft: () => void
  setRight: () => void
  set: (value: T) => void
  toggle: () => void
}
export declare function useToggle<T = boolean>(): [Ref<boolean>, Actions<T>]
export declare function useToggle<T>(defaultValue: T): [Ref<T>, Actions<T>]
export declare function useToggle<T, R>(
  defaultValue: T,
  reverseValue: R
): [Ref<T | R>, Actions<T | R>]
```
