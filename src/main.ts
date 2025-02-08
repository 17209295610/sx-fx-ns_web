import { createApp } from '@vue/runtime-dom'
import type { Component } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import router from './router'
import App from './App.vue'
import { setupPlugins } from './plugins'
import { validateEnv } from './utils/env'
import './utils/errorBoundary'

// 导入样式 - 调整顺序，先导入 Tailwind，再导入 Element Plus
import '@/assets/main.css'
import 'element-plus/dist/index.css'

// 强制响应式系统优先加载
import '@vue/reactivity'
import '@vue/runtime-core'

// 验证环境变量
validateEnv()

const app = createApp(App)

// 注册所有图标
for (const [key, component] of Object.entries(Icons as Record<string, Component>)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)

// 设置插件
setupPlugins(app)

app.mount('#app') 