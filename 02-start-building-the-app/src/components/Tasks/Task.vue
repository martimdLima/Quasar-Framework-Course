<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-touch-hold:1000.mouse="displayEditTask"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox class="no-pointer-events" :modelValue="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strike': task.completed }">
        {{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon class="q-mr-xs" name="event" size="18px" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          flat
          round
          dense
          color="primary"
          icon="edit"
          @click.stop="displayEditTask()"
        />

        <q-btn
          flat
          round
          dense
          color="red"
          icon="delete"
          @click.stop="confirm()"
        />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task @close="displayEditTask" :editTask="task" :id="id" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["task", "id"],
  components: {
    "edit-task": require("components/Tasks/Modals/EditTask").default,
  },
  data() {
    return {
      showEditTask: false,
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    confirm() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to delete this task?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.deleteTask(this.id);
        });
    },
    displayEditTask() {
      this.showEditTask = !this.showEditTask;
    },
  },
};
</script>

<style>
</style>