import { ref, CSSProperties, defineComponent, onMounted, onUnmounted } from 'vue'
import { isColor } from '@yex/shared'

import './index.scss'

export default defineComponent({
  name: 'scroll-progress-bar',
  props: {
    root: {
      type: String,
      default: '#app',
      required: false,
    },
    height: {
      type: String,
      default: '4px',
      required: false,
    },
    theme: {
      type: String,
      default: '#3eaf7c',
      required: false,
      validator: isColor,
    },
    placement: {
      type: String,
      default: 'top',
      required: false,
      validator: (v: string) => {
        if (!['top', 'bottom'].includes(v)) {
          console.error(`[@yex/vue - ScrollProgressBar(placement)] The value must match one of these strings: 'top' | 'bottom'`)
          return false
        }
        return true
      },
    },
    zIndex: {
      type: Number,
      default: 10000,
      required: false,
      validator: (v: string) => /^-?[\d]+$/.test(v),
    },
  },
  setup(props) {
    const el = ref<InstanceType<typeof HTMLDivElement>>()
    const appHeight = ref(0)

    onMounted(() => {
      const targetNode = document.querySelector(props.root)
      if (!targetNode) return console.error(`[@yex/vue - ScrollProgressBar(root)] '${props.root}' is invalid`)
      const config = { attributes: true, childList: false, subtree: true }
      const observer = new MutationObserver((mutationsList: MutationRecord[]) => {
        // Use traditional 'for loops' for IE 11
        for(let mutation of mutationsList) {
          if (mutation.type === 'attributes') {
            appHeight.value = document.documentElement.scrollHeight
          }
        }
      })
      observer.observe(targetNode, config)
    })

    const listener = () => {
      const scrollProgress = el.value
      const height = appHeight.value - document.documentElement.clientHeight
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      if (scrollProgress) scrollProgress.style.width = `${(scrollTop / height) * 100}%`
    }

    onMounted(() => window.addEventListener('scroll', listener))
    onUnmounted(() => window.removeEventListener('scroll', listener))

    const style: CSSProperties = {
      background: props.theme,
      zIndex: props.zIndex,
      height: props.height,
    }

    if (props.placement === 'top') style.top = 0
    if (props.placement === 'bottom') style.bottom = 0

    return (
      <div class="yex-scroll-progress-bar" ref="el" style="style" />
    )
  }
})