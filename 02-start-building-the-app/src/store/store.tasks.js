import { uid } from "quasar";

const state = {
  tasks: {
    ID1: {
      name: "Go to Shop",
      dueDate: "2021/06/22",
      dueTime: "18:30",
      completed: false,
    },
    ID2: {
      name: "Go to Post Office",
      dueDate: "2021/06/02",
      dueTime: "14:15",
      completed: false,
    },
    ID3: {
      name: "Go to the Gym",
      dueDate: "2021/05/28",
      dueTime: "09:30",
      completed: false,
    },
  },
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    delete state.tasks[id];
  },
  addTask(state, payload) {
    state.tasks[payload.id] = payload.task;
    //const newTask = payload.task;
    //state.tasks = { ...state.tasks, newTask };
  },
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({ commit }, task) {
    let taskId = uid();
    const payload = {
      id: taskId,
      task: task,
    };

    commit("addTask", payload);
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
