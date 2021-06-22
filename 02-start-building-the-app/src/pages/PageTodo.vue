<template>
  <q-page class="q-pa-md">
    <q-list bordered>
      <q-item
        v-ripple
        v-for="task in tasks"
        :key="task.id"
        @click="!task.completed"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.name }}</q-item-label>
          <q-item-label caption> </q-item-label>
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
        { id: 1, name: "Go to Shop", completed: false },
        { id: 2, name: "Go to Post Office", completed: false },
        { id: 3, name: "Go to the Gym", completed: false },
      ],
    };
  },
});
</script>
