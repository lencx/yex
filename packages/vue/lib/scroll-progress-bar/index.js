'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@yex/shared');

const camelizeRE = /-(\w)/g;
const camelize = (str) => str.replace(camelizeRE, (_, c) => c.toUpperCase());

function withInstall(options) {
  options.install = (app) => {
    const { name } = options;
    app.component(name, options);
    app.component(camelize(`-${name}`), options);
  };
  return options;
}

var _ScrollProgressBar = vue.defineComponent({
  name: "scroll-progress-bar",
  props: {
    root: {
      type: String,
      default: "#app",
      required: false
    },
    height: {
      type: String,
      default: "4px",
      required: false
    },
    theme: {
      type: String,
      default: "#3eaf7c",
      required: false,
      validator: shared.isColor
    },
    placement: {
      type: String,
      default: "top",
      required: false,
      validator: (v) => {
        if (!["top", "bottom"].includes(v)) {
          console.error(`[@yex/vue - ScrollProgressBar(placement)] The value must match one of these strings: 'top' | 'bottom'`);
          return false;
        }
        return true;
      }
    },
    zIndex: {
      type: Number,
      default: 1e4,
      required: false,
      validator: (v) => /^-?[\d]+$/.test(v)
    }
  },
  setup(props) {
    const el = vue.ref();
    const appHeight = vue.ref(0);
    vue.onMounted(() => {
      const targetNode = document.querySelector(props.root);
      if (!targetNode)
        return console.error(`[@yex/vue - ScrollProgressBar(root)] '${props.root}' is invalid`);
      const config = { attributes: true, childList: false, subtree: true };
      const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
          if (mutation.type === "attributes") {
            appHeight.value = document.documentElement.scrollHeight;
          }
        }
      });
      observer.observe(targetNode, config);
    });
    const listener = () => {
      const scrollProgress = el.value;
      const height = appHeight.value - document.documentElement.clientHeight;
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollProgress)
        scrollProgress.style.width = `${scrollTop / height * 100}%`;
    };
    vue.onMounted(() => window.addEventListener("scroll", listener));
    vue.onUnmounted(() => window.removeEventListener("scroll", listener));
    ({
      background: props.theme,
      zIndex: props.zIndex,
      height: props.height
    });
    if (props.placement === "top")
      ;
    if (props.placement === "bottom")
      ;
    return /* @__PURE__ */ React.createElement("div", {
      class: "yex-scroll-progress-bar",
      ref: "el",
      style: "style"
    });
  }
});

const ScrollProgressBar = withInstall(_ScrollProgressBar);

exports.ScrollProgressBar = ScrollProgressBar;
exports["default"] = ScrollProgressBar;
