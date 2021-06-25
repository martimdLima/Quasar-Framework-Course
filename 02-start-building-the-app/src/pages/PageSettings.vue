<template>
  <q-page padding>
   <q-list bordered padding>

      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="show12HourTimeFormat" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  data() {
    return {
      show12HourTimeFormat: false,
    }
  },
  computed: {
    ...mapGetters("settings", ["getSettings"])
  },
  show12HourTimeFormat() {
    return this.settings.show12HourTimeFormat;
  }
}
</script>
