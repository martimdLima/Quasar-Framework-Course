const state = {
  tasks: [
    {
      id: 1,
      name: "Go to Shop",
      dueDate: "22/06/2020",
      dueTime: "18:30",
      completed: true,
    },
    {
      id: 2,
      name: "Go to Post Office",
      dueDate: "26/06/2020",
      dueTime: "14:15",
      completed: false,
    },
    {
      id: 3,
      name: "Go to the Gym",
      dueDate: "24/06/2020",
      dueTime: "09:30",
      completed: false,
    },
  ],
};

const mutations = {};

const actions = {};

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
