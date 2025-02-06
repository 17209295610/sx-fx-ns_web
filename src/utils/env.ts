import { handleError } from './errorHandler'

/**
 * 验证必需的环境变量是否存在
 * 在应用启动时调用
 */
export function validateEnv() {
  const requiredEnvVars = [
    'VITE_APP_TITLE',
    'VITE_API_BASE_URL',
    'VITE_ASSETS_URL'
  ]

  requiredEnvVars.forEach(key => {
    if (!import.meta.env[key]) {
      handleError(new Error(`Missing required environment variable: ${key}`))
    }
  })
} 