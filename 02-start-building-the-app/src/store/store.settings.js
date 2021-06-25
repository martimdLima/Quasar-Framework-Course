import { uid } from "quasar";

const state = {
  settings: {
    show12HourTimeFormat: true,
  },
};

const mutations = {
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value;
  },
};

const actions = {
  setShow12HourTimeFormat({ commit }, value) {
    commit("setShow12HourTimeFormat", value);
  },
};

const getters = {
  getSettings: (state) => {
    return state.settings;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
