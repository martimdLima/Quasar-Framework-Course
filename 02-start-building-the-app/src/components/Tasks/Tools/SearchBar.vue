<template>
  <q-input
    v-select-all
    class="col"
    outlined
    v-model="searchField"
    label="Search Tasks"
  >
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
import { mapState, mapActions } from "vuex";
import { selectAll } from "../../../directives/directive-select-all";

export default {
  computed: {
    ...mapState("tasks", ["searchBarText"]),
    searchField: {
      get() {
        return this.searchBarText;
      },
      set(value) {
        this.setSearchText(value);
      },
    },
  },
  methods: {
    ...mapActions("tasks", ["setSearchText"]),
  },
  directives: {
    selectAll,
  },
};
</script>

<style>
</style>