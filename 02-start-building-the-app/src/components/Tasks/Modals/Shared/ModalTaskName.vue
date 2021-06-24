<template>
  <div class="row q-mb-sm">
    <q-input
      ref="name"
      autofocus
      outlined
      clearable
      class="col"
      :modelValue="name"
      @update:modelValue="(event) => $emit('update:name', event)"
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      v-select-all
      label="Task Name"
    />
  </div>
</template>

<script>
import { selectAll } from '../../../../directives/directive-select-all'

export default {
  props: ["name"],
  directives: {
    selectAll,
  },
};
</script>