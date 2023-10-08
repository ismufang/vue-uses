import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 30 * 1000,
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src']
    }
  }
})
