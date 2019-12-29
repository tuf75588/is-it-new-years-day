<template>
  <div>
    <p class="yes-no">{{ isNewYearsDay }}</p>
    <p class="time-left">{{ currentTime }}</p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { formatDistanceToNow } from 'date-fns';

const formatOptions = {
  addSuffix: true,
  includeSeconds: true,
};

export default {
  name: 'Countdown',
  setup() {
    const today = new Date();
    const newYearsDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 2,
      today.getHours(),
      today.getMinutes(),
      today.getSeconds(),
    );
    const dayAfterNewYears = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1,
      today.getHours(),
      today.getMinutes(),
      today.getSeconds(),
    );
    const currentTime = ref('Maybe?');
    const isNewYearsDay = ref('');

    setInterval(() => {
      const now = new Date();
      currentTime.value = formatDistanceToNow(newYearsDay, formatOptions);
      if (now < newYearsDay || now >= dayAfterNewYears) {
        isNewYearsDay.value = 'NO 😟';
        currentTime.value = `It's new years in ${formatDistanceToNow(newYearsDay)}`;
      } else if (now >= newYearsDay) {
        isNewYearsDay.value = 'YES 🎉';
        currentTime.value = `It's been new years for ${formatDistanceToNow(newYearsDay)}`;
      }
    }, 500);

    return {
      currentTime,
      isNewYearsDay,
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
