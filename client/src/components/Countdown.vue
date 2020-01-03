<template>
  <div>
    <div v-if="ready">
      <p class="yes-no" v-if="isNewYearsDay">{{ shouldWeTranslate.yes }}</p>
      <p class="yes-no" v-else>{{ shouldWeTranslate.no }}</p>
    </div>
    <p class="time-left">{{ timeTranslation }}</p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { DateTime } from 'luxon';
import io from 'socket.io-client';
import translations from '../translations/index';
import allTranslations from '../translations.json';
// eslint-disable-next-line arrow-parens
const roundValue = (value) => Math.floor(Math.abs(value));

/* eslint-disable */
// simplified version of: https://github.com/wojtekmaj/get-user-locale
function getLanguage(langOverride) {
  const language =
    langOverride ||
    // eslint-disable-next-line operator-linebreak
    (window.navigator.languages ? window.navigator.languages[0] : null) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage ||
    window.navigator.systemLanguage ||
    'en';
  return language.split('-')[0].toLowerCase();
}

const params = new URLSearchParams(window.location.search);
const language = getLanguage(params.get('lang'));
// eslint-disable-next-line
console.log('detecting language...', language);

const shouldWeTranslate = allTranslations[language] || allTranslations.en;
const formatting = translations[language] || translations.en;

export default {
  setup() {
    const ready = ref(false);
    // eslint-disable-next-line
    const isNewYearsDay = ref(false);
    const timeTranslation = ref('Maybe...');
    const socket = io('http://localhost:8000');
    // eslint-disable-next-line prefer-const
    let now = DateTime.local();
    const durations = ['months', 'days', 'hours', 'minutes', 'seconds'];

    function getTimeTranslation(newYearsDay) {
      let { months, days, hours, minutes, seconds } = newYearsDay.diffNow(durations);
      months = roundValue(months);
      days = roundValue(days);
      hours = roundValue(hours);
      minutes = roundValue(minutes);
      seconds = roundValue(seconds);
      if ([months, days, hours, minutes, seconds].every((t) => t === 0)) return '';
      return formatting({
        isNewsYearsEve: newYearsDay.value,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    }

    function updateClock() {
      ready.value = true;
      now = DateTime.local();
      // new years day is January 1st, 2020
      let newYearsDay = DateTime.local(now.year, 1, 1);
      if (isNewYearsDay.value) {
        newYearsDay = getTimeTranslation(newYearsDay);
        document.title = shouldWeTranslate.yes;
      } else {
        newYearsDay = DateTime.local(now.year + 1, 1, 1);
        timeTranslation.value = getTimeTranslation(newYearsDay);
        document.title = shouldWeTranslate.no;
      }
      setTimeout(updateClock, 500);
    }
    updateClock();

    return {
      ready,
      timeTranslation,
      isNewYearsDay,
      shouldWeTranslate,
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
.time-left {
  text-align: center;
  font-size: calc(1rem + 4vmin);
}
</style>
