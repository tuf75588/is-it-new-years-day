<template>
  <div>
    <mouse :transform="transform" />
  </div>
</template>

<script>
/* TODO: if we haven't moved, don't emit an event */

import { reactive, computed } from '@vue/composition-api';

import Mouse from './Mouse.vue';

if (!Math.clamp) Math.clamp = (val, min, max) => Math.min(max, Math.max(val, min));

export default {
  components: {
    Mouse,
  },
  props: ['socket'],
  setup({ socket }) {
    // eslint-disable-next-line

    const location = reactive({
      x: window.innerWidth / 2,
      y: window.innerHeigh / 2,
    });
    // if lastLocation equals location, we haven't moved
    const lastLocation = reactive({
      x: location.x,
      y: location.y,
    });
    function updateLocation() {
      if (
        // eslint-disable-next-line
        Math.abs(lastLocation.x - location.x) > 0.001 ||
        Math.abs(lastLocation.y - location.y) > 0.001
      ) {
        lastLocation.x = location.x;
        lastLocation.y = location.y;
        socket.emit('location', {
          x: Math.clamp(location.x / window.innerWidth, 0, 1),
          y: Math.clamp(location.y / window.innerHeight, 0, 1),
        });
      }

      setTimeout(updateLocation, 100);
    }
    // eslint-disable-next-line arrow-body-style
    const transform = computed(() => {
      return `translate(-50%, -50%) translate(${location.x}px, ${location.y}px)`;
    });

    // listen for mouse movements
    document.addEventListener('mousemove', (e) => {
      location.x = e.x;
      location.y = e.y;
    });

    // emit location of mouse every 2 seconds to server
    socket.on('connect', () => {
      updateLocation();
    });
    return {
      location,
      transform,
    };
  },
};
</script>

<style></style>
