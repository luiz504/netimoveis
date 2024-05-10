import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    alias: { '~/': new URL('./src/', import.meta.url).pathname },
    setupFiles: ['./vitest.setup.mts'],
  },
})
