import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.mp4'],
  optimizeDeps: {
    include: [
      '@vue/reactivity',
      '@vue/runtime-core',
      'element-plus/es/components'
    ]
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    sourcemap: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@vue')) return 'vue-core'
          if (id.includes('element-plus')) return 'element-plus'
          if (id.includes('node_modules')) return 'vendor'
        },
        experimentalMinChunkSize: 300000
      }
    }
  }
}) 