<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section>
          <q-item-label :class="task.completed ? 'text-strike' : ''">{{
            task.name
          }}</q-item-label>
          <q-item-label caption> </q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>

            <div class="column">
              <q-item-label class="row justify-end" caption>{{
                task.dueDate
              }}</q-item-label>
              <q-item-label class="row justify-end" caption>
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to Shop",
          dueDate: "22/06/2020",
          dueTime: "18:30",
          completed: false,
        },
        {
          id: 2,
          name: "Go to Post Office",
          dueDate: "26/06/2020",
          dueTime: "14:15",
          completed: false,
        },
        {
          id: 3,
          name: "Go to the Gym",
          dueDate: "24/06/2020",
          dueTime: "09:30",
          completed: false,
        },
      ],
    };
  },
});
</script>
