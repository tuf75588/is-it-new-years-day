<template>
  <div>
    <div v-if="ready">
      <p class="yes-no" v-if="isNewYearsDay">YES</p>
      <p class="yes-no" v-else>NO</p>
    </div>
    <p class="time-left">{{ currentTime }}</p>
  </div>
</template>

<script>
// eslint-disable-next-line arrow-parens
const roundValue = (value) => Math.floor(Math.abs(value));
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable space-before-function-paren */
import { ref } from '@vue/composition-api';
import { DateTime } from 'luxon';
import io from 'socket.io-client';

export default {
  setup() {
    const ready = ref(false);
    // eslint-disable-next-line
    const socket = io('http://localhost:8000');
  },
};
</script>

<style scoped>
.yes-no {
  margin: 2rem;
  text-align: center;
  font-size: calc(2rem + 8vmin);
}
.time-left {
  text-align: center;
  font-size: calc(1rem + 4vmin);
}
</style>
