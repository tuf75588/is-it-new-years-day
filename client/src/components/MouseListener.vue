<template>
  <div>
    <span class="mouse" :style="{ transform }">🐭</span>
    <pre>{{ location }}</pre>
  </div>
</template>

<script>
import { reactive, computed } from '@vue/composition-api';
import io from 'socket.io-client';
import API_URL from '../API_URL';

export default {
  setup() {
    // eslint-disable-next-line
    const socket = io(API_URL);
    const location = reactive({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    // eslint-disable-next-line arrow-body-style
    const transform = computed(() => {
      return `translate(${location.x}px,${location.y}px)`;
    });

    // listen for mouse movements
    document.addEventListener('mousemove', (e) => {
      location.x = e.x;
      location.y = e.y;
    });
    socket.on('state', (state) => {
      console.log(state);
    });
    return {
      location,
      transform,
    };
  },
};
</script>

<style>
.mouse {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
