<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <template v-if="tasksDownloaded">
        <div class="row q-mb-lg">
          <search-bar></search-bar>
          <sort></sort>
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

        <q-scroll-area class="q-scroll-area-tasks">
          <no-tasks
            @showAddTask="showAddTaskDialog"
            v-if="
              !Object.keys(tasksTodo).length &&
              !searchBarText &&
              !getSettings.showTasksInOneList
            "
          />

          <tasks-todo
            v-if="Object.keys(tasksTodo).length"
            :tasksTodo="tasksTodo"
          />

          <tasks-completed
            v-if="Object.keys(tasksCompleted).length"
            :tasksCompleted="tasksCompleted"
            class="q-mb-xl"
          />
        </q-scroll-area>

        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn
            class="all-pointer-events"
            @click="showAddTaskDialog"
            round
            color="primary"
            size="24px"
            icon="add"
          />
        </div>
      </template>

      <template v-else>
        <span class="absolute-center">
          <q-spinner color="primary" size="3em" />
        </span>
      </template>
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
import Sort from "../components/Tasks/Tools/Sort.vue";

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
    ...mapGetters("settings", ["getSettings"]),
    ...mapState("tasks", ["searchBarText", "tasksDownloaded"]),
  },
  components: {
    AddTask,
    TasksTodo,
    TasksCompleted,
    NoTasks,
    SearchBar,
    Sort,
  },
});
</script>

<style lang="scss">
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
  .scroll {
    height: auto !important;
  }
}
</style>