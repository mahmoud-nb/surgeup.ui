import type { App } from 'vue'
import Button from './components/atoms/Button.vue'
import * as accessibility from './utils/accessibility'

export { Button }
export { accessibility }

export interface SurgeUpDSOptions {
  prefix?: string
}

export default {
  install(app: App, options: SurgeUpDSOptions = {}) {
    const prefix = options.prefix || 'Su'
    
    app.component(`${prefix}Button`, Button)
  }
}

export * from './types'