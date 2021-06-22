const state = {
  tasks: {
    ID1: {
      name: "Go to Shop",
      dueDate: "22/06/2020",
      dueTime: "18:30",
      completed: false,
    },
    ID2: {
      name: "Go to Post Office",
      dueDate: "26/06/2020",
      dueTime: "14:15",
      completed: false,
    },
    ID3: {
      name: "Go to the Gym",
      dueDate: "24/06/2020",
      dueTime: "09:30",
      completed: false,
    },
  },
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
};

const getters = {
  tasks: (state) => {
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
