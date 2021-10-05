import type { HeadConfig } from 'vitepress'

export default [
  ['link', { rel: 'icon', href: '/logo.svg' }],
  // https://stackoverflow.com/questions/49568333/pwa-icons-are-not-used-in-ios-11-3
  ['link', { rel: 'apple-touch-icon', size: '180x180', href: '/logo.png' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' }],
  ['meta', { name: 'author', content: 'lencx' }],
  ['meta', { property: 'og:title', content: 'Yex' }],
  ['meta', { property: 'og:image', content: 'https://yex.nofwl.com/logo.png' }],
  ['meta', { property: 'og:description', content: '✌️ Yex - components library' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:image', content: 'https://yex.nofwl.com/logo.png' }],
] as HeadConfig[];