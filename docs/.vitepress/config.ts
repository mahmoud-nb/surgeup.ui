import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SurgeUp Design System',
  description: 'Bibliothèque de composants Vue.js 3 moderne',
  
  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
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
              { text: 'ButtonsGroup', link: '/components/buttonsgroup' },
              { text: 'Link', link: '/components/link' },
              { text: 'LinksGroup', link: '/components/linksgroup' },
              { text: 'Input', link: '/components/input' },
              { text: 'SelectBox', link: '/components/selectbox' },
              { text: 'RadioGroup', link: '/components/radiogroup' },
              { text: 'CheckboxGroup', link: '/components/checkboxgroup' },
              { text: 'Switch', link: '/components/switch' },
              { text: 'FileUpload', link: '/components/fileupload' },
              { text: 'Textarea', link: '/components/textarea' },
              { text: 'Slider', link: '/components/slider' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'SurgeUp Design System',
      description: 'Modern Vue.js 3 component library',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Components', link: '/en/components/' },
          { text: 'Storybook', link: 'http://localhost:6006', target: '_blank' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Introduction', link: '/en/' },
              { text: 'Installation', link: '/en/guide/installation' }
            ]
          },
          {
            text: 'Components',
            items: [
              { text: 'Button', link: '/en/components/button' },
              { text: 'ButtonsGroup', link: '/en/components/buttonsgroup' },
              { text: 'Link', link: '/en/components/link' },
              { text: 'LinksGroup', link: '/en/components/linksgroup' },
              { text: 'Input', link: '/en/components/input' },
              { text: 'SelectBox', link: '/en/components/selectbox' },
              { text: 'RadioGroup', link: '/en/components/radiogroup' },
              { text: 'CheckboxGroup', link: '/en/components/checkboxgroup' },
              { text: 'Switch', link: '/en/components/switch' },
              { text: 'FileUpload', link: '/en/components/fileupload' },
              { text: 'Textarea', link: '/en/components/textarea' },
              { text: 'Slider', link: '/en/components/slider' }
            ]
          }
        ]
      }
    }
  },
  
  themeConfig: {
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
      include: ['@heroicons/vue/24/outline', '@surgeup/ds-vue']
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