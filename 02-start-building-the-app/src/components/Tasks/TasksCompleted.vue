<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div :class="{ 'q-mt-lg': !getSettings.showTasksInOneList }">
      <list-header v-if="!getSettings.showTasksInOneList" :color="bgColor"
        >Completed</list-header
      >
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
import { mapGetters } from "vuex";
import ListHeader from "../Shared/ListHeader.vue";
import Task from "./Task.vue";

export default {
  props: ["tasksCompleted"],
  data() {
    return {
      bgColor: "bg-green-4",
    };
  },
  computed: {
    ...mapGetters("settings", ["getSettings"]),
  },
  components: {
    Task,
    ListHeader,
  },
};
</script>






