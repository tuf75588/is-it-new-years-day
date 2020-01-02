<template>
  <span
    class="mouse"
    :style="{
      transform: `translate3d(-50%, -50%, 0)
        translate3d(${isMine ? `${location.x}px` : `${location.x * 100}vw`},
          ${isMine ? `${location.y}px` : `${location.y * 100}vh`}, 0)
        scale(0.5)`,
    }"
  >
    <img src="https://twemoji.maxcdn.com/v/latest/72x72/1f49a.png"/></span
></template>

<script>
export default {
  props: ['isMine', 'location', 'isSmooth'],
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
