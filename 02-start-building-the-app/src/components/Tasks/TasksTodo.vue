<template>
  <q-list v-if="Object.keys(tasksTodo).length" bordered separator>
    <task
      v-for="(task, key) in tasksTodo"
      :key="key"
      :task="task"
      :id="key"
    ></task>
  </q-list>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: { Task },
  props: ["tasksTodo"],
};
</script>






