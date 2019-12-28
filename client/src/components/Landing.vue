<template>
  <div class="landing">
    <Countdown />
  </div>
</template>

<script>
import Countdown from './Countdown.vue';

export default {
  name: 'Landing',
  components: {
    Countdown,
  },
};
</script>

<style scoped>
.landing {
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
