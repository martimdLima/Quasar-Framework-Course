<template>
  <div class="row q-mb-sm">
    <q-input
      ref="dueDate"
      clearable
      outlined
      label="Due Date"
      :modelValue="dueDate"
      @update:modelValue="(event) => $emit('update:dueDate', event)"
      :rules="['date']"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date
              :modelValue="dueDate"
              @update:modelValue="(event) => $emit('update:dueDate', event)"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["dueDate"],
};
</script>