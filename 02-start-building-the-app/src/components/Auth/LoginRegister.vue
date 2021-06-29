<template>
  <q-form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner dense class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{ formatTitle }} to access your Todos!
        <template v-slot:action>
          <q-btn flat color="primary" :label="tab" />
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
        :rules="[
          (val) => isValidEmailAddress(val) || 'Please enter a valid Email',
        ]"
        lazy-rules
        ref="email"
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
        :rules="[(val) => val.length >= 6 || 'Please use maximum 6 characters']"
        lazy-rules
        ref="password"
      />
    </div>

    <div class="row">
      <q-space />
      <q-btn type="submit" color="primary" :label="tab" />
    </div>
  </q-form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser", "loginUser"]),
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (
        !this.$refs.email.hasError &&
        !this.$refs.password.hasError &&
        this.tab === "login"
      ) {
        console.log("login the user");
        this.loginUser(this.formData)
      } else {
        console.log("register the user");
        this.registerUser(this.formData);
      }
    },
    isValidEmailAddress(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
  computed: {
    formatTitle() {
      return this.tab.charAt(0).toUpperCase() + this.tab.slice(1);
    },
  },
};
</script>

<style>
</style>