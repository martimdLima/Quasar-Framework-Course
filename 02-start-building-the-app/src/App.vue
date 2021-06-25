<template>
  <router-view />
</template>


<script>
import {mapActions} from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("settings", ["getSavedSettings"])
  },
  mounted() {
    this.getSavedSettings();
  }
};
</script>
