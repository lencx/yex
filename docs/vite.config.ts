// import { promises as fs } from 'fs'
import { UserConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
// import { FileSystemIconLoader } from 'unplugin-icons/loaders'
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
  ],
}

export default config