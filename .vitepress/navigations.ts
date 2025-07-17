export const nav = [
  { text: 'Главная 🏠', link: '/' },
  { text: 'Wiki 📚', link: '/main' }
];

export const sidebar = [
  {
    text: 'Основное',
    items: [
      { text: 'Главная', link: '/main' },
      { text: 'Начать играть', link: '/start' },
      { text: 'Правила', link: '/rule' },
      { text: 'Моды', link: '/mods' },
      { text: 'Зеленая зона', link: '/green-zone' },
      { text: 'Адские ветки', link: '/highway' },
      { text: 'Банк', link: '/bank' }
    ]
  },
  {
    text: 'Гайды',
    collapsed: false,
    items: [
      { text: 'Авторизация', link: '/auth' },
      { text: 'Самоуправление', link: '/sde' },
      { text: 'Эмоции', link: '/emotes' },
      { text: 'Голосовой чат', link: '/voice' }
    ]
  },
  {
    text: 'Лицензии',
    collapsed: true,
    items: [
      { text: 'LICENSE', link: '/LICENSE' },
      { text: 'LICENSE-CC-BY-NC-SA-4.0', link: '/LICENSE-CC-BY-NC-SA-4.0' },
      { text: 'CLA', link: '/cla' }
    ]
  }
];