# useReducer

Complex state management.

In certain scenarios, `useReduce` may be more suitable than `useState`, such as complex state logic with multiple sub values, or the next state relying on the previous state. Moreover, using useReducer can also optimize performance for components that trigger deep updates, as you can pass patches to sub components instead of callback functions.

## Usage

```ts
import { useReducer } from 'vue-uses'

type State = {
  count: number
}

type Action = {
  type: string
  payload?: any
}

const initialCount = {
  count: 0
}

const init = (state: State) => {
  return { count: state.count }
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

const [state, dispatch] = useReducer(reducer, initialCount, init)
```

## Reference

```ts
const [state, dispatch] = useReducer<R extends Reducer<any, any>, I>(reducer: R,
  initializerArg: I,
  initializer?: (arg: I) => ReducerState<R>)
```

### Type Declarations

```ts
export declare type Reducer<S, A> = (prevState: S, action: A) => S
export declare type ReducerState<R extends Reducer<any, any>> =
  R extends Reducer<infer S, any> ? S : never
export declare type ReducerAction<R extends Reducer<any, any>> =
  R extends Reducer<any, infer A> ? A : never
export declare type Dispatch<A> = (value: A) => void
export declare function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I,
  initializer?: (arg: I) => ReducerState<R>
): [Ref<ReducerState<R>>, Dispatch<ReducerAction<R>>]
```

### Params

- **`reducer`**_`: Reducer`_ &mdash; reducer 纯函数，返回最新状态
- **`initializerArg`**_`: I`_ &mdash;初始 state
- **`initializer`**_`: (arg: I) => ReducerState<R>`_ &mdash; 惰性地创建初始 state。为此，需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 `init(initialArg)`

### Result

- **`state`**_`: Ref<ReducerState<R>>`_ &mdash; 状态值
- **`dispatch`**_`: Dispatch<ReducerAction<R>>`_ &mdash; 调度函数集合，触发状态更新
