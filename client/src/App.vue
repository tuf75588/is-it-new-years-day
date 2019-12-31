<template>
  <div id="app">
    <Landing />
  </div>
</template>

<script>
import Landing from './components/Landing.vue';

export default {
  name: 'app',
  components: {
    Landing,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  cursor: none;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
