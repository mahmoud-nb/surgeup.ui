import type { App } from 'vue'
import FormField from './components/atoms/FormField.vue'
import Button from './components/atoms/Button.vue'
import ButtonsGroup from './components/molecules/ButtonsGroup.vue'
import Link from './components/atoms/Link.vue'
import LinksGroup from './components/molecules/LinksGroup.vue'
import Input from './components/atoms/Input.vue'
import SelectBox from './components/atoms/SelectBox.vue'
import RadioGroup from './components/atoms/RadioGroup.vue'
import CheckboxGroup from './components/atoms/CheckboxGroup.vue'
import Switch from './components/atoms/Switch.vue'
import FileUpload from './components/atoms/FileUpload.vue'
import Textarea from './components/atoms/Textarea.vue'
import Slider from './components/atoms/Slider.vue'
import * as accessibility from './utils/accessibility'

export { FormField, Button, ButtonsGroup, Link, LinksGroup, Input, SelectBox, RadioGroup, CheckboxGroup, Switch, FileUpload, Textarea, Slider }
export { accessibility }

export interface SurgeUpDSOptions {
  prefix?: string
}

export default {
  install(app: App, options: SurgeUpDSOptions = {}) {
    const prefix = options.prefix || 'Su'
    
    app.component(`${prefix}FormField`, FormField)
    app.component(`${prefix}Button`, Button)
    app.component(`${prefix}ButtonsGroup`, ButtonsGroup)
    app.component(`${prefix}Link`, Link)
    app.component(`${prefix}LinksGroup`, LinksGroup)
    app.component(`${prefix}Input`, Input)
    app.component(`${prefix}SelectBox`, SelectBox)
    app.component(`${prefix}RadioGroup`, RadioGroup)
    app.component(`${prefix}CheckboxGroup`, CheckboxGroup)
    app.component(`${prefix}Switch`, Switch)
    app.component(`${prefix}FileUpload`, FileUpload)
    app.component(`${prefix}Textarea`, Textarea)
    app.component(`${prefix}Slider`, Slider)
  }
}

export * from './types'