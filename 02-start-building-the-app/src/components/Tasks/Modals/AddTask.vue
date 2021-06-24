<template>
  <q-card>
    <modal-header>Add Task </modal-header>

    <q-form @submit.prevent="submitForm" ref="taskForm">
      <q-card-section>
        <modal-task-name v-model:name="taskToSubmit.name" ref="modalTaskName" />

        <modal-due-date
          v-model:dueDate="taskToSubmit.dueDate"
          ref="modalDueDate"
        >
        </modal-due-date>

        <modal-due-time
          v-if="taskToSubmit.dueDate"
          v-model:dueTime="taskToSubmit.dueTime"
          ref="modalDueTime"
        />

        <modal-buttons />
      </q-card-section>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

import mixinAddEditTask from "../../../mixins/mixin-add-edit-task";

export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false,
      },
    };
  },
  mixins: [mixinAddEditTask],
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },
  },
};
</script>