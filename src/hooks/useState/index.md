# useState

Managing state.

## Usage

```ts
import { useState } from 'vue-uses'
const [state, setState] = useState(1)
```

## Reference

```ts
const [state, setState] = useState<T>(initialValue?: T | (() => T))
```

### Type Declarations

```ts
export declare function useState<T>(
  initialValue: T | (() => T)
): [Ref<UnwrapRef<T>>, (value: T | ((c: UnwrapRef<T>) => T)) => void]
export declare function useState<T = any>(): [
  Ref<T>,
  (value: T | ((c: T) => T)) => void
]
```
