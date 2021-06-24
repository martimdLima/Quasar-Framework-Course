<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg">
      <search-bar></search-bar>
    </div>

    <p
      v-if="
        searchBarText &&
        !Object.keys(tasksTodo).length &&
        !Object.keys(tasksCompleted).length
      "
    >
      No search results.
    </p>

    <no-tasks
      @showAddTask="showAddTaskDialog"
      v-if="!Object.keys(tasksTodo).length && !searchBarText"
    />

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
import { mapGetters, mapState } from "vuex";
import AddTask from "../components/Tasks/Modals/AddTask.vue";
import NoTasks from "../components/Tasks/NoTasks.vue";
import TasksCompleted from "../components/Tasks/TasksCompleted.vue";
import TasksTodo from "../components/Tasks/TasksTodo.vue";
import SearchBar from "../components/Tasks/Tools/SearchBar.vue";

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
    ...mapState("tasks", ["searchBarText"]),
  },
  components: {
    AddTask,
    TasksTodo,
    TasksCompleted,
    NoTasks,
    SearchBar,
  },
});
</script>