<template>
  <div>
    <mouse
      v-for="client in clients"
      :isSmooth="true"
      :location="client.location"
      :key="client.id"
    />
  </div>
</template>

<script>
/* eslint-disable array-callback-return */
import { ref, computed } from '@vue/composition-api';
import Mouse from './Mouse.vue';

export default {
  setup({ socket }) {
    const clientsById = ref({});
    const clients = computed(() => Object.entries(clientsById.value));
    socket.on('state', (state) => {
      // eslint-disable-next-line no-shadow
      // eslint-disable-next-line arrow-body-style
      clientsById.value = Object.entries(state).reduce((all, [id, client]) => {
        if (id !== socket.id) {
          all.push({ id, location: { x: client.x, y: client.y } });
        }
      }, []);
    });
    return {
      clients,
    };
  },
  props: ['transform', 'socket'],
  components: {
    Mouse,
  },
};
</script>

<style></style>
