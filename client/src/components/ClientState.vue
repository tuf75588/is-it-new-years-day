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
import { ref } from '@vue/composition-api';
import Mouse from './Mouse.vue';

export default {
  setup({ socket }) {
    const clients = ref([]);
    socket.on('state', (state) => {
      // eslint-disable-next-line no-shadow
      // eslint-disable-next-line arrow-body-style
      clients.value = Object.entries(state).reduce((all, [id, client]) => {
        if (id !== socket.id) {
          all.push({
            id,
            // eslint-disable-next-line operator-linebreak
            transform: `translate(-50%, -50%) translate(${client.x * 100}vw, ${client.y *
              100}vh) scale(0.5)`,
          });
        }
        return all;
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
