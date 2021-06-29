import { uid } from "quasar";
import { fb, firebaseAuth, firebaseDb } from "boot/firebase";

const state = {
  tasks: {},
  searchBarText: "",
  sortTerm: "name",
  tasksDownloaded: false,
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
  setSortTerm(state, value) {
    state.sortTerm = value;
  },
  setTasksDownloaded(state, value) {
    state.tasksDownloaded = value;
  },
};

const actions = {
  updateTask({ dispatch }, payload) {
    dispatch("fbUpdateTask", payload);
  },
  deleteTask({ dispatch }, id) {
    dispatch("fbDeleteTask", id);
  },
  addTask({ dispatch }, task) {
    let taskId = uid();
    const payload = {
      id: taskId,
      task: task,
    };

    dispatch("fbAddTask", payload);
  },
  setSearchText({ commit }, value) {
    commit("setSearchText", value);
  },
  setSortTerm({ commit }, value) {
    commit("setSortTerm", value);
  },
  setTasksDownloaded({ commit }, value) {
    commit("setTasksDownloaded", value);
  },
  fbReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid;

    let firebaseDb = fb.database();

    let userTasks = firebaseDb.ref("tasks/" + userId);

    // initial check for data
    userTasks.once("value", (snapshot) => {
      commit("setTasksDownloaded", true);
    });

    // child added
    userTasks.on("child_added", (snapshot) => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        task: task,
      };
      commit("addTask", payload);
    });

    // child changed
    userTasks.on("child_changed", (snapshot) => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        updates: task,
      };
      commit("updateTask", payload);
    });

    // child removed
    userTasks.on("child_removed", (snapshot) => {
      let taskId = snapshot.key;
      commit("deleteTask", taskId);
    });
  },
  fbAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    taskRef.set(payload.task);
  },
  fbUpdateTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    taskRef.update(payload.updates);
  },
  fbDeleteTask({}, taskId) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + taskId);
    taskRef.remove();
  },
};

const getters = {
  tasksSorted: (state) => {
    let tasksSorted = {};

    let keysOrdered = Object.keys(state.tasks);

    keysOrdered.sort((a, b) => {
      let taskA = state.tasks[a][state.sortTerm].toLowerCase();
      let taskB = state.tasks[b][state.sortTerm].toLowerCase();

      if (taskA > taskB) {
        return 1;
      } else if (taskA < taskB) {
        return -1;
      } else {
        return 0;
      }
    });

    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key];
    });

    return tasksSorted;
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};

    Object.keys(tasksFiltered).forEach((key) => {
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
  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted;

    let filteredTasks = {};

    if (state.searchBarText) {
      Object.keys(tasksSorted).forEach(function (key) {
        let task = tasksSorted[key];
        let taskNameLowerCase = task.name.toLowerCase();
        let searchLowerCase = state.searchBarText.toLowerCase();

        if (taskNameLowerCase.includes(searchLowerCase)) {
          filteredTasks[key] = task;
        }
      });

      return filteredTasks;
    }

    return tasksSorted;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
