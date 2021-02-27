<template>
  <div class="AppNumberInput">
    <label style="margin-right: 8px;">Number Input</label>
    <input type="text" :value="value" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    value: Number
  }
});
</script>
