<template>
  <div>
    <p class="yes-no">NO</p>
    <p class="time-left">{{ currentTime }}</p>
  </div>
</template>

<script>
// import { formatDistance } from 'date-fns';
import { ref } from '@vue/composition-api';

export default {
  // data: () => ({
  //   currentTime: new Date().toLocaleString(),
  // }),
  // created() {
  //   setInterval(() => {
  //     this.currentTime = new Date().toLocaleString();
  //   }, 500);
  // },
  name: 'Countdown',
  setup() {
    const currentTime = ref(new Date().toLocaleString());
    const today = new Date();
    // eslint-disable-next-line no-unused-vars
    const newYearsDay = new Date(today.getFullYear() + 1, 1, 1);
    setInterval(() => {
      currentTime.value = new Date().toLocaleString();
    }, 500);
    return {
      currentTime,
    };
  },
};
</script>

<style scoped>
.yes-no {
  margin: 2rem;
  text-align: center;
  font-size: calc(2rem + 8vmin);
}
.question,
.time-left {
  text-align: center;
  font-size: calc(1rem + 4vmin);
}
</style>
