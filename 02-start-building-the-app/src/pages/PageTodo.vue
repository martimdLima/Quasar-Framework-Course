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
      <add-task />
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";

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
    ...mapGetters("tasks", ["tasks"]),
  },
  components: {
    task: require("components/Tasks/Task.vue").default,
    addTask: require("components/Tasks/Modals/AddTask.vue").default,
  },
});
</script>