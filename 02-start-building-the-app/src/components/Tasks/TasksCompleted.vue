<template>
  <q-list v-if="Object.keys(tasksCompleted).length" bordered separator>
    <task
      v-for="(task, key) in tasksCompleted"
      :key="key"
      :task="task"
      :id="key"
    ></task>
  </q-list>
</template>

<script>
import Task from "./Task.vue";

export default {
  props: ["tasksCompleted"],
  components: {
    Task,
  },
};
</script>






