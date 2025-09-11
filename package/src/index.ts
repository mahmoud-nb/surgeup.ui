import type { App } from 'vue'
import Button from './components/atoms/Button.vue'
import Input from './components/atoms/Input.vue'
import SelectBox from './components/atoms/SelectBox.vue'
import RadioGroup from './components/atoms/RadioGroup.vue'
import CheckboxGroup from './components/atoms/CheckboxGroup.vue'
import * as accessibility from './utils/accessibility'

export { Button, Input, SelectBox, RadioGroup, CheckboxGroup }
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
    app.component(`${prefix}RadioGroup`, RadioGroup)
    app.component(`${prefix}CheckboxGroup`, CheckboxGroup)
  }
}

export * from './types'