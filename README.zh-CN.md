# vue-uses

A Hooks Library for Vue3 and 2，适用于 Vue3 和 2 的 Hooks 库。

[English](./README.md) | 简体中文

## 安装

```bash
$ npm install --save vue-uses
# or
$ yarn add vue-uses
# or
$ pnpm add vue-uses
```

## 使用

```ts
import { useBoolean } from 'vue-uses'
const [state, { toggle, setFalse, setTrue }] = useBoolean()
```

## Hooks

- **State**

  - [`useState`](./src/hooks/useState/index.md) &mdash; 管理 state
  - [`useReducer`](./src/hooks/useReducer/index.md) &mdash; 适用于复杂状态管理
  - [`useToggle`](./src/hooks/useToggle/index.md) &mdash; 用于在两个状态值间切换
  - [`useBoolean`](./src/hooks/useBoolean/index.md) &mdash; 管理 boolean

- **Scene**

  - [`useCounter`](./src/hooks/useCounter/index.md) &mdash; 管理计数器
  - [`useMethods`](./src/hooks/useMethods/index.md) &mdash; 简化版的 `useReducer`
  - [`useCountDown`](./src/hooks/useCountDown/index.md) &mdash; 管理倒计时
  - [`usePolling`](./src/hooks/usePolling/index.md) &mdash; 管理轮询

- **Effect**

  - [`useTimeout`](./src/hooks/useTimeout/index.md) &mdash; 处理 `setTimeout`
  - [`useInterval`](./src/hooks/useInterval/index.md) &mdash; 处理 `setInterval`

- **LifeCycle**

  - [`useEffect`](./src/hooks/useEffect/index.md) &mdash; 方便管理生命周期，立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行
  - [`useEffectOnce`](./src/hooks/useEffectOnce/index.md) &mdash; 只在 `mounted`、`beforeUnmount`阶段执行的生命周期
  - [`useFirstMountState`](./src/hooks/useFirstMountState/index.md) &mdash; 检测当前是否为第一次渲染
  - [`useLogger`](./src/hooks/useLogger/index.md) &mdash; 在控制台记录 vue 生命周期变化
