import { PackageManifest } from './types';

export const packages: PackageManifest[] = [
  {
    name: 'shared',
    display: 'Yex',
    version: '0.1.0-alpha.0',
    description: 'Collection of essential Utilities',
    submodules: true,
    // iife: false,
    keywords: [
      'yex',
      'utils',
      'is',
      'browser',
    ],
  },
  {
    name: 'vue',
    display: 'Yex',
    version: '0.1.0-alpha.0',
    description: 'Components Library',
    submodules: true,
    // iife: false,
    keywords: [
      'yex',
      'vue3',
      'components',
    ],
  },
];
