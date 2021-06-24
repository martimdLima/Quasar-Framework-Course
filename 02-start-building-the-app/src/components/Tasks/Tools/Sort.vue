<template>
  <q-select
    v-model="sortBy"
    :options="options"
    label="Sort by"
    class="col q-ml-sm"
    filled
    stack-label
    emit-value
    map-options
  />
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      options: [
        {
          label: "Name",
          value: "name",
        },
        {
          label: "Date",
          value: "dueDate",
        },
      ],
    };
  },
  computed: {
    ...mapState("tasks", ["sortTerm"]),
    sortBy: {
      get() {
        return this.sortTerm;
      },
      set(value) {
        this.setSortTerm(value);
      },
    },
  },
  methods: {
    ...mapActions("tasks", ["setSortTerm"]),
  },
};
</script>

<style scoped>
.q-select {
  flex: 0 0 112px;
}
</style>