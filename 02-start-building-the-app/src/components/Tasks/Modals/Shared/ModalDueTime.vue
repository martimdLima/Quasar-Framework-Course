<template>
  <div class="row q-mb-sm">
    <q-input
      ref="dueTime"
      outlined
      clearable
      label="Due Time"
      :modelValue="dueTime"
      @update:modelValue="(event) => $emit('update:dueTime', event)"
      :rules="['time']"
    >
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time
              :modelValue="dueTime"
              @update:modelValue="(event) => $emit('update:dueTime', event)"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["dueTime"],
};
</script>