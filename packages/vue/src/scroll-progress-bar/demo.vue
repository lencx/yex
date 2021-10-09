<template>
  <div class="demo-container">
    <div class="scroll-container"></div>
    <scroll-progress-bar root=".scroll-container" />
  </div>
</template>

<style scoped>
.demo-scroll-container {
  height: 150px;
  border: solid 1px #d8d8d8;
}
.demo-scroll-container .scroll-container {
  height: 200vh;
}
</style>