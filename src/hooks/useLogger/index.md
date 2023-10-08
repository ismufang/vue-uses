# useLogger

Logging Vue lifecycle changes to the console.

## Usage

```ts
import { useLogger, useState } from 'vue-uses'
useLogger('Demo', new Date().toLocaleDateString())
```

## Reference

### Type Declarations

```ts
export declare function useLogger(componentName: string, ...rest: any[]): void
```
