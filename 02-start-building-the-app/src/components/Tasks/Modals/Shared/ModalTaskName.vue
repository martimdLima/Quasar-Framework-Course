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
export default {
  props: ["name"],
  directives: {
    selectAll: {
      mounted(el) {
        const input = el.querySelector(".q-field__native");

        console.log("TEST");

        input.addEventListener("focus", () => {
          if (input.value.length) {
            input.select();
          }
        });
      },
    },
  },
};
</script>