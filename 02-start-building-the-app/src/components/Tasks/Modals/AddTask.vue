<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn v-close-popup flat round dense icon="close" />
    </q-card-section>

    <q-form @submit.prevent="submitForm" ref="taskForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input
            ref="name"
            autofocus
            outlined
            clearable
            class="col"
            v-model="taskToSubmit.name"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
            label="Task Name"
          />
        </div>

        <div class="row q-mb-sm">
          <q-input
            ref="dueDate"
            clearable
            outlined
            label="Due Date"
            v-model="taskToSubmit.dueDate"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="taskToSubmit.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

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
        completed: false,
      },
    };
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