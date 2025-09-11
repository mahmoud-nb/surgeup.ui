import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SurgeUp Design System',
  description: 'Bibliothèque de composants Vue.js 3 moderne',
  
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Composants', link: '/components/' },
      { text: 'Storybook', link: 'http://localhost:6006', target: '_blank' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      },
      {
        text: 'Composants',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'SelectBox', link: '/components/selectbox' },
          { text: 'RadioGroup', link: '/components/radiogroup' },
          { text: 'CheckboxGroup', link: '/components/checkboxgroup' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/surgeup/design-system' }
    ],

    footer: {
      message: 'Publié sous licence MIT.',
      copyright: 'Copyright © 2024 SurgeUp'
    }
  },

  vite: {
    optimizeDeps: {
      include: ['@heroicons/vue/24/outline']
    }
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('su-')
      }
    }
  }
})