<script setup lang="ts">
import { withBase, useData } from 'vitepress'
const { site, theme, localePath } = useData()
</script>

<template>
  <a
    class="nav-bar-title whitespace-nowrap"
    :href="localePath"
    :aria-label="`${site.title}, back to home`"
  >
    <img
      v-if="theme.logo"
      class="logo"
      :src="withBase(theme.logo)"
      alt="Logo"
    />
  </a>
</template>

<style scoped>
.nav-bar-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--c-text);
  width: 32px;
}

.nav-bar-title:hover {
  text-decoration: none;
}

.logo {
  width: 100%;
  vertical-align: middle;
  border-radius: 50%;
  border: solid 2px #f8f8f8;
}
.dark .logo {
  border: solid 2px #666;
}
</style>