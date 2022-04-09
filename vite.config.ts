/// <reference types="vitest" />

import { defineConfig } from 'vite'
import * as path from 'path'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Vue3-TS-GraphQL-Tailwind-Sample-SpaceX/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['vue'],
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [vue()],
})
