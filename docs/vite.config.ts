// import { promises as fs } from 'fs'
import { UserConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import WindiCSS from 'vite-plugin-windicss';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite'

const config: UserConfig = {
  plugins: [
    Icons({
      compiler: 'vue3',
    }),
    Components({
      dts: true,
      transformer: 'vue3',
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    WindiCSS({
      preflight: false,
    }),
  ],
}

export default config;
