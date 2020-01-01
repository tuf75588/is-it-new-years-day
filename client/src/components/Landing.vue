<template>
  <div class="landing">
    <countdown />
    <mouse-listener :socket="socket" />
    <client-state :socket="socket" />
  </div>
</template>

<script>
import io from 'socket.io-client';
import API_URL from '../API_URL';
import Countdown from './Countdown.vue';
import MouseListener from './MouseListener.vue';
import ClientState from './ClientState.vue';

export default {
  name: 'Landing',
  components: {
    Countdown,
    MouseListener,
    ClientState,
  },
  setup() {
    const socket = io(API_URL);
    return {
      socket,
    };
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
