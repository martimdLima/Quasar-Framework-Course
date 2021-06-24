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
export default {
  data() {
    return {
      searchField: "",
    };
  },
};
</script>

<style>
</style>