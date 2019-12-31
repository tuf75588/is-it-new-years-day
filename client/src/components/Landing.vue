<template>
  <div class="landing">
    <mouse-listener />
    <Countdown />
  </div>
</template>

<script>
import Countdown from './Countdown.vue';
import MouseListener from './MouseListener.vue';

export default {
  name: 'Landing',
  components: {
    Countdown,
    MouseListener,
  },
};
</script>

<style scoped>
.landing {
  position: relative;
  height: 100%;
  width: 100%;
  background: #000;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
