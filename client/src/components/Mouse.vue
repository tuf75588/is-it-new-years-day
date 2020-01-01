<template>
  <span class="mouse" :style="{ transform }">
    <img src="https://twemoji.maxcdn.com/v/latest/72x72/1f49a.png"/></span
></template>

<script>
export default {
  props: ['transform'],
};
</script>

<style scoped>
.mouse {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1ms ease-in-out;
}
</style>
