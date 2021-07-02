<template>
  <router-view />
</template>


<script>
import {mapActions} from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("settings", ["getSavedSettings"]),
    ...mapActions("auth", ["handleAuthStateChange"])
  },
  mounted() {
    this.getSavedSettings();
    this.handleAuthStateChange();
  }
};
</script>
