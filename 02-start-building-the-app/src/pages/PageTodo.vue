<template>
  <q-page class="q-pa-md">
    <tasks-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />

    <tasks-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"
    />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTaskDialog"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTaskDialog" />
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";
import AddTask from "../components/Tasks/Modals/AddTask.vue";
import TasksCompleted from "../components/Tasks/TasksCompleted.vue";
import TasksTodo from "../components/Tasks/TasksTodo.vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    showAddTaskDialog() {
      this.showAddTask = !this.showAddTask;
    },
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
  },
  components: {
    AddTask,
    TasksTodo,
    TasksCompleted,
  },
});
</script>