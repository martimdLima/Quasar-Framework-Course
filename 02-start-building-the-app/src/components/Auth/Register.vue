<template>
  <q-form @submit.prevent="submitForm">
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
         :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid Email']"
         lazy-rules
        
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
         :rules="[ val => val.length <= 6 || 'Please use maximum 6 characters']"
         lazy-rules
      />
    </div>

    <div class="row">
      <q-space />
      <q-btn type="submit" color="primary" label="Register" />
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
  methods: {
    submitForm() {
        console.log(this.formData)
    },
    isValidEmailAddress(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
  },
};
</script>

<style>
</style>