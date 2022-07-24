# Custom Hooks

custom hooks collections 😃

## Getting Started

- package install

```bash
npm i -D eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm i -D vite-tsconfig-paths
```

- vite setting

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
```
