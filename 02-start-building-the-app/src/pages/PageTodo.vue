<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "PageIndex",
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
  components: {
    task: require("components/Tasks/Task.vue").default,
  },
});
</script>
