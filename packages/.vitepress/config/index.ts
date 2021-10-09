import type { UserConfig } from 'vitepress';

import head from './head';
import sidebar from './sidebar';
import { mdPlugin } from './plugins';

export const config: UserConfig = {
  title: 'YEX',
  description: 'Components library',
  lang: 'en-US',
  base: '/',
  head,
  themeConfig: {
    logo: '/logo.svg',
    repo: 'yexjs/yex',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'main',
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    sidebar,
  },
  markdown: {
    lineNumbers: true,
    config: (md) => mdPlugin(md),
  },
};
