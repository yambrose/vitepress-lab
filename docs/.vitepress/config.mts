import { defineConfig } from 'vitepress';

export default defineConfig({
  head: [
      ['link', {rel: 'icon', type: 'image/png', href: '/logo.png'}]
  ],
  themeConfig: {
    siteTitle: "PaperBeam",
    logo: "/logo.png",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Examples', link: '/examples' },
      {
        text: 'Learning',
        activeMatch: '^/learning/',
        items: [
          { text: 'Overview', link: '/learning/learn-main' },
          { text: 'Basics', link: '/learning/learn-basics' },
          { text: 'Advanced', link: '/learning/learn-advanced' }
        ]
      },
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about' },
          { text: 'Examples', link: '/examples' },
          { text: 'References', link: '/references' }
        ]
      },
      {
        text: 'Learning',
        items: [
          { text: 'Overview', link: '/learning/learn-main' },
          { text: 'Basics', link: '/learning/learn-basics' },
          { text: 'Advanced', link: '/learning/learn-advanced' }
        ]
      }
    ]
  }
});
