import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fengxiang-nisu/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.mp4'],
  build: {
    assetsInlineLimit: 0,
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
}) 