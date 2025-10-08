import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import SurgeUpDS from '@surgeui/ds-vue'
import '@surgeui/ds-vue/style.css'
import './custom.css'

// Import global des icônes Heroicons les plus courantes
import {
  PlusIcon,
  TrashIcon,
  ArrowRightIcon,
  HeartIcon,
  ShareIcon,
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
  CheckIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  AtSymbolIcon,
  LockClosedIcon,
  UserIcon,
  StarIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  FlagIcon,
  HomeIcon,
  CogIcon
} from '@heroicons/vue/24/outline'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }: { app: import('vue').App }) {
    if (inBrowser) {
      app.use(SurgeUpDS)

      // Enregistrement global des icônes courantes
      app.component('PlusIcon', PlusIcon)
      app.component('TrashIcon', TrashIcon)
      app.component('ArrowRightIcon', ArrowRightIcon)
      app.component('HeartIcon', HeartIcon)
      app.component('ShareIcon', ShareIcon)
      app.component('ArrowDownTrayIcon', ArrowDownTrayIcon)
      app.component('ArrowTopRightOnSquareIcon', ArrowTopRightOnSquareIcon)
      app.component('XMarkIcon', XMarkIcon)
      app.component('CheckIcon', CheckIcon)
      app.component('ExclamationTriangleIcon', ExclamationTriangleIcon)
      app.component('InformationCircleIcon', InformationCircleIcon)
      app.component('MagnifyingGlassIcon', MagnifyingGlassIcon)
      app.component('AtSymbolIcon', AtSymbolIcon)
      app.component('LockClosedIcon', LockClosedIcon)
      app.component('UserIcon', UserIcon)
      app.component('StarIcon', StarIcon)
      app.component('BuildingOfficeIcon', BuildingOfficeIcon)
      app.component('GlobeAltIcon', GlobeAltIcon)
      app.component('FlagIcon', FlagIcon)
      app.component('HomeIcon', HomeIcon)
      app.component('CogIcon', CogIcon)
    }
  }
}