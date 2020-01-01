<template>
  <div>
    <mouse v-for="client in clients" :transform="client.transform" :key="client.id" />
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';
import Mouse from './Mouse.vue';

export default {
  setup({ socket }) {
    const clients = computed(() => []);
    socket.on('state', (state) => {
      // eslint-disable-next-line no-shadow
      // eslint-disable-next-line arrow-body-style
      clients.values = Object.entries(state).map(([id, client]) => {
        return {
          id,
          transform: `${id}px`,
        };
      });
    });
  },
  props: ['transform', 'socket'],
  components: {
    Mouse,
  },
};
</script>

<style></style>
