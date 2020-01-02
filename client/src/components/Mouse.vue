<template>
  <span
    class="mouse"
    :style="{
      transform,
    }"
    :class="{ smoothTransition: isSmooth }"
  >
    <img src="https://twemoji.maxcdn.com/v/latest/72x72/1f49a.png"/></span
></template>

<script>
export default {
  props: ['isMine', 'location', 'isSmooth', 'transform'],
};
</script>

<style scoped>
.mouse {
  position: absolute;
  top: 0;
  left: 0;
}

.smoothTransition {
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
