<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header :color="bgColor">Todo</list-header>
      <q-list bordered separator>
        <task
          v-for="(task, key) in tasksTodo"
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
  components: { Task, ListHeader },
  props: ["tasksTodo"],
  data() {
    return {
      bgColor: "bg-orange-4",
    };
  },
};
</script>