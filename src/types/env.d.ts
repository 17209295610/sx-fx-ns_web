/// <reference types="vite/client" />

/**
 * Vite 环境变量类型定义
 */
interface ImportMetaEnv {
  /** 应用标题 */
  readonly VITE_APP_TITLE: string
  /** API基础路径 */
  readonly VITE_API_BASE_URL: string
  /** 静态资源路径 */
  readonly VITE_ASSETS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 