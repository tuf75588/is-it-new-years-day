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
    console.log('socket', socket.id);
    const clients = computed(() => []);
    socket.on('state', (state) => {
      console.log(state);
    });
  },
  props: ['transform', 'socket'],
  components: {
    Mouse,
  },
};
</script>

<style></style>
