<template>
  <q-form>
    <div class="row q-mb-md">
      <q-banner dense class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Register to access your Todos!
        <template v-slot:action>
          <q-btn flat color="primary" label="Register" />
        </template>
      </q-banner>
    </div>

    <div class="row q-mb-md">
      <q-input
        outlined
        v-model="formData.email"
        label="Email"
        stack-label
        class="col"
      />
    </div>

    <div class="row q-mb-md">
      <q-input
        type="password"
        outlined
        v-model="formData.password"
        label="Password"
        stack-label
        class="col"
      />
    </div>

    <div class="row">
      <q-space />
      <q-btn color="primary" label="Register" />
    </div>
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style>
</style>