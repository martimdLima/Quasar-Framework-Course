<template>
  <q-card>
    <modal-header>Edit Task </modal-header>

    <q-form @submit.prevent="submitForm" ref="taskForm">
      <q-card-section>
        <modal-task-name v-model:name="taskToSubmit.name" ref="modalTaskName" />

        <modal-due-date
          v-model:dueDate="taskToSubmit.dueDate"
          ref="modalDueDate"
        />

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
import ModalButtons from "./Shared/ModalButtons.vue";

import mixinAddEditTask from "../../../mixins/mixin-add-edit-task";

export default {
  props: ["editTask", "id"],
  data() {
    return {
      taskToSubmit: {},
    };
  },
  mixins: [mixinAddEditTask],
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit,
      });
      this.$emit("close");
    },
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.editTask);
  },
};
</script>