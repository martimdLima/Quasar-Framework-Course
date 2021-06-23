<template>
  <q-item
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
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

    <q-item-section side>
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

       <q-btn flat
        round
        dense
        color="red" icon="delete" @click.stop="confirm()" />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    
    confirm () {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete this task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
          this.deleteTask(this.id);
      })
    }

  },
};
</script>

<style>
</style>