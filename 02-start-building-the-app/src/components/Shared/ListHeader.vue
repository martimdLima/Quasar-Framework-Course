<template>
  <q-banner
    dense
    inline-actions
    :class="color"
    class="list-header text-white text-center"
  >
    <span class="text-bold text-subtitle1"><slot></slot></span>
  </q-banner>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    headerClasses() {
      return "list-header text-white text-center" + this.color;
    },
  },
};
</script>

<style>
.list-header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>