<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div class="q-mt-lg">
      <list-header :color="bgColor">Completed</list-header>
      <q-list bordered separator>
        <task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key"
        ></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import ListHeader from "../Shared/ListHeader.vue";
import Task from "./Task.vue";

export default {
  props: ["tasksCompleted"],
  data() {
    return {
      bgColor: "bg-green-4",
    };
  },
  components: {
    Task,
    ListHeader,
  },
};
</script>






