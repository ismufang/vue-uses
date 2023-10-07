# vue-uses

A Hooks Library for Vue3 and 2

English | [简体中文](./README.zh-CN.md)

## Install

```bash
$ npm install --save vue-uses
# or
$ yarn add vue-uses
# or
$ pnpm add vue-uses
```

## Usage

```ts
import { useBoolean } from 'vue-uses'
const [state, { toggle, setFalse, setTrue }] = useBoolean()
```

## Hooks

- **State**

  - [`useState`](./src/hooks/useState/index.md) &mdash; managing state.
  - [`useReducer`](./src/hooks/useReducer/index.md) &mdash; complex state management.
  - [`useToggle`](./src/hooks/useToggle/index.md) &mdash; oggling between two states.
  - [`useBoolean`](./src/hooks/useBoolean/index.md) &mdash; managing boolean values.

- **Scene**

  - [`useCounter`](./src/hooks/useCounter/index.md) &mdash; managing counters.
  - [`useMethods`](./src/hooks/useMethods/index.md) &mdash;  A simplified version of `useReducer`.
  - [`useCountDown`](./src/hooks/useCountDown/index.md) &mdash; managing countdowns.
  - [`usePolling`](./src/hooks/usePolling/index.md) &mdash; managing polling.

- **Effect**

  - [`useTimeout`](./src/hooks/useTimeout/index.md) &mdash; handling `setTimeout`.
  - [`useInterval`](./src/hooks/useInterval/index.md) &mdash; handling `setInterval`.

- **LifeCycle**

  - [`useEffect`](./src/hooks/useEffect/index.md) &mdash; conveniently managing component lifecycle, running a function immediately, tracking its dependencies reactively, and re-executing when dependencies change.
  - [`useEffectOnce`](./src/hooks/useEffectOnce/index.md) &mdash; a lifecycle function only during the `mounted` and `beforeUnmount` phases.
  - [`useFirstMountState`](./src/hooks/useFirstMountState/index.md) &mdash; detecting whether the current render is the first render.
  - [`useLogger`](./src/hooks/useLogger/index.md) &mdash; logging Vue lifecycle changes to the console.