import DefaultTheme from 'vitepress/theme'
import SurgeUpDS from '@surgeup/ds-vue'
import '@surgeup/ds-vue/style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(SurgeUpDS)
  }
}