import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/wiki/',
  markdown: {
    container: {
      tipLabel: 'Совет',
      warningLabel: 'Предупреждение!',
      dangerLabel: 'Важно!',
      infoLabel: 'Информация',
      detailsLabel: 'Подробная информация'
    }
  },
  lang: 'ru-RU',
  title: "exteraCraft",
  description: "exteraCraft - играй по красному",
  themeConfig: {
    logo: 'logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Wiki', link: '/main' },
    ],
    sidebar: [
      {
        text: 'Основное',
        items: [
          { text: 'Главная', link: '/main' },
          { text: 'Начать играть', link: '/start' },
          { text: 'Правила', link: '/rule' },
          { text: 'Моды', link: '/mods' },
        ]
      }
    ],
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }],
    ['link', { rel: 'icon', href: 'cube.png' }]
  ],
  vite: {
    resolve: {
      alias: {
        '@components': '/docs/.vitepress/components'
      }
    }
  }
});
