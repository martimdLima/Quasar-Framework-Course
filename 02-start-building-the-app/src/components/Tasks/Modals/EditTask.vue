<template>
  <q-card>
    <modal-header>Edit Task </modal-header>

    <q-form @submit.prevent="submitForm" ref="taskForm">
      <q-card-section>
        <modal-task-name v-model:name="taskToSubmit.name" ref="modalTaskName" />

        <modal-task-due-date
          v-model:dueDate="taskToSubmit.dueDate"
          ref="modalDueDate"
        />

        <modal-task-due-time
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

export default {
  props: ["editTask", "id"],
  data() {
    return {
      taskToSubmit: {},
    };
  },
  components: {
    "modal-header": require("components/Tasks/Modals/Shared/ModalHeader.vue")
      .default,
    "modal-task-name":
      require("components/Tasks/Modals/Shared/ModalTaskName.vue").default,
    "modal-task-due-date":
      require("components/Tasks/Modals/Shared/ModalDueDate.vue").default,
    "modal-task-due-time":
      require("components/Tasks/Modals/Shared/ModalDueTime.vue").default,
    "modal-buttons": require("components/Tasks/Modals/Shared/ModalButtons.vue")
      .default,
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitForm() {
      this.$refs.taskForm.validate().then((success) => {
        if (success) {
          this.submitTask();
          //console.log("SUCCESS");
        } else {
          //console.log("FAIL");
        }
      });

      // to reset validations:
      this.$refs.taskForm.resetValidation();
    },
    submitTask() {
      //console.log("submitTask");
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