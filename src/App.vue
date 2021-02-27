<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>Thousand Separator</h2>
    <app-input-number v-separator v-model="inputNumber" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppInputNumber from "./components/AppNumberInput.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppInputNumber
  },
  data() {
    return {
      inputNumber: null
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
