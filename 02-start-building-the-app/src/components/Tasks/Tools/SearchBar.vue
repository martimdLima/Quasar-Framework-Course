<template>
  <q-input class="col" outlined v-model="searchField" label="Search Tasks">
    <template v-slot:append>
      <q-icon
        v-if="searchField !== ''"
        name="close"
        @click="searchField = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("tasks", ["searchBarText"]),
    searchField() {
      return this.searchBarText;
    },
  },
};
</script>

<style>
</style>