import { Theme } from 'vitepress'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import DemoBlock from './components/demo/DemoBlock.vue'

import './styles/vars.css'
import './styles/layout.css'
import './styles/code.css'
import './styles/prism-base.css'
import './styles/prism-marker.css';
import './styles/custom-blocks.css'
import './styles/sidebar-links.css'
import 'windi.css'

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('Demo', DemoBlock)
  }
}

export default theme