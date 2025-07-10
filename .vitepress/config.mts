import { defineConfig } from 'vitepress';
import { nav, sidebar } from './navigations';

export default defineConfig({
  base: '/wiki/',
  srcDir: './docs',
  markdown: {
    container: {
      tipLabel: 'Подсказка',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      infoLabel: 'Информация',
      detailsLabel: 'Подробнее',
    },
  },
  lang: 'ru-RU',
  title: 'exteraCraft',
  description: 'exteraCraft - играй по красному',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/exteracraft/wiki/edit/main/docs/:path',
      text: 'Предложить изменения на этой странице',
    },
    lastUpdated: {
      text: 'Последнее обновление',
    },
    logo: '/logo.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
    nav,
    sidebar,
    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/exteraCraft' },
      { icon: 'github', link: 'https://github.com/exteracraft' },
    ],
    outlineTitle: 'Оглавление',
    lastUpdatedText: 'Последнее обновление',
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Тема',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
      },
    ],
    ['link', { rel: 'icon', href: 'cube.png' }],
  ],
  cleanUrls: true,
});
