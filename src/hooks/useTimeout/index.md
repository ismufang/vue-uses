# useTimeout

Handling `setTimeout`.

## Usage

```ts
import { useTimeout, useState } from 'vue-uses'
const [state, setState] = useState(0)
const { run, destroy } = useTimeout(() => {
  setState(c => c + 1)
}, 3000)
```

## Reference

```ts
const actions = useTimeout(fn: () => void, delay: number)
```

### Type Declarations

```ts
export interface Actions {
  run: () => void
  destroy: () => void
}
export declare function useTimeout(fn: () => void, delay: number): Actions
```
