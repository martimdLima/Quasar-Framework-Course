<template>
<div>
  <list-header>Completed</list-header>
  <q-list v-if="Object.keys(tasksCompleted).length" bordered separator>
    <task
      v-for="(task, key) in tasksCompleted"
      :key="key"
      :task="task"
      :id="key"
    ></task>
  </q-list>
</div>

</template>

<script>
import ListHeader from '../Shared/ListHeader.vue';
import Task from "./Task.vue";

export default {
  props: ["tasksCompleted"],
  components: {
    Task,
    ListHeader,
  },
};
</script>






