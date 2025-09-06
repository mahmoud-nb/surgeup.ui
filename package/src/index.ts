import type { App } from 'vue'
import Button from './components/atoms/Button.vue'
import Input from './components/atoms/Input.vue'
import SelectBox from './components/atoms/SelectBox.vue'
import * as accessibility from './utils/accessibility'

export { Button, Input, SelectBox }
export { accessibility }

export interface SurgeUpDSOptions {
  prefix?: string
}

export default {
  install(app: App, options: SurgeUpDSOptions = {}) {
    const prefix = options.prefix || 'Su'
    
    app.component(`${prefix}Button`, Button)
    app.component(`${prefix}Input`, Input)
    app.component(`${prefix}SelectBox`, SelectBox)
  }
}

export * from './types'