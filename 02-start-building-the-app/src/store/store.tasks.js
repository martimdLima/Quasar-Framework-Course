import { uid } from "quasar";

const state = {
  tasks: {
    ID1: {
      name: "Go to Shop",
      dueDate: "2021/06/22",
      dueTime: "18:30",
      completed: true,
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
  searchBarText: "",
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
  setSearchText(state, payload) {
    state.searchBarText = payload;
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
  setSearchText({ commit }, value) {
    commit("setSearchText", value);
  },
};

const getters = {
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};

    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key];

      if (!task.completed) {
        tasks[key] = task;
      }
    });

    return tasks;
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};

    Object.keys(tasksFiltered).forEach(function (key) {
      let task = tasksFiltered[key];

      if (task.completed) {
        tasks[key] = task;
      }
    });

    return tasks;
  },
  tasksFiltered: (state) => {
    let filteredTasks = {};

    if (state.searchBarText) {
      Object.keys(state.tasks).forEach(function (key) {
        let task = state.tasks[key];
        let taskNameLowerCase = task.name.toLowerCase();
        let searchLowerCase = state.searchBarText.toLowerCase();

        if (taskNameLowerCase.includes(searchLowerCase)) {
          filteredTasks[key] = task;
          //console.log(state.tasks[key])
        }
      });

      return filteredTasks;
    }

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
