import { uid } from "quasar";

const state = {
  settings: {
    show12HourTimeFormat: true,
    showTasksInOneList: false,
  },
};

const mutations = {
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value;
  },
  setShowTasksInOneList(state, value) {
    state.settings.showTasksInOneList = value;
  },
};

const actions = {
  setShow12HourTimeFormat({ commit }, value) {
    commit("setShow12HourTimeFormat", value);
  },
  setShowTasksInOneList({ commit, dispatch }, value) {
    commit("setShowTasksInOneList", value);
    //dispatch("saveSettings");
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
