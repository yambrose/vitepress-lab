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
      { text: 'References', link: '/references' }
    ]
  }
});

