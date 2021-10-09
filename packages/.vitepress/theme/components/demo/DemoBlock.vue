<template>
  <div class="demo wide">
    <slot />
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <SourceCode :source="source" />
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onErrorCaptured, ref } from 'vue'
import SourceCode from './SourceCode.vue'

const props = defineProps({
  // source is encoded via encodeURIComponent
  source: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
  cssPreProcessor: {
    type: String,
    required: true,
  },
  js: {
    type: String,
    required: true,
  },
  jsPreProcessor: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  demos: {
    type: Object,
    required: true,
  },
  rawSource: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
})

// const vm = getCurrentInstance()

const error = ref(null)
onErrorCaptured((err) => {
  error.value = err
})
</script>