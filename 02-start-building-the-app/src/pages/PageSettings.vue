<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="show12HourTimeFormat" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("settings", ["setShow12HourTimeFormat"]),
  },
  computed: {
    ...mapGetters("settings", ["getSettings"]),
    show12HourTimeFormat: {
      get() {
        return this.getSettings.show12HourTimeFormat;
      },
      set(value) {
        this.setShow12HourTimeFormat(value);
      },
    },
  },
};
</script>
