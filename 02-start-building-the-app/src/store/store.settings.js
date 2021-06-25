import { uid } from "quasar";

const state = {
  settings: {
    show12HourTimeFormat: false,
  }
};

const mutations = {

};

const actions = {

};

const getters = {
  getSettings: state => {
    return state.settings
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
