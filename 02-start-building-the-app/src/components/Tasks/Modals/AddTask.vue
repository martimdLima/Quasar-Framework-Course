<template>
  <q-card>
    <modal-header>Add Task </modal-header>

    <q-form @submit.prevent="submitForm" ref="taskForm">
      <q-card-section>
        <modal-task-name v-model:name="taskToSubmit.name" />

        <modal-task-due-date v-model:dueDate="taskToSubmit.dueDate"/>

       

        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
          <q-input
            ref="dueTime"
            outlined
            clearable
            label="Due Time"
            v-model="taskToSubmit.dueTime"
            :rules="['time']"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn type="submit" label="SAVE" color="primary" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: true,
      },
    };
  },
  components: {
    "modal-header": require("components/Tasks/Modals/Shared/ModalHeader.vue")
      .default,
    "modal-task-name":
      require("components/Tasks/Modals/Shared/ModalTaskName.vue").default,
       "modal-task-due-date":
      require("components/Tasks/Modals/Shared/ModalDueDate.vue").default,
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
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
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },
  },
};
</script>