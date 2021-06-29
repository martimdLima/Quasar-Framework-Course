import { uid } from "quasar";
import { firebaseAuth } from "boot/firebase";

const state = {
  tasks: {
    /*
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
    ID4: {
      name: "B",
      dueDate: "2021/05/28",
      dueTime: "09:30",
      completed: false,
    },
    ID5: {
      name: "A",
      dueDate: "2021/05/28",
      dueTime: "09:30",
      completed: false,
    },
    ID6: {
      name: "D",
      dueDate: "2021/05/28",
      dueTime: "09:30",
      completed: false,
    },
    ID7: {
      name: "C",
      dueDate: "2021/04/14",
      dueTime: "14:45",
      completed: false,
    },
    ID8: {
      name: "E",
      dueDate: "2021/05/15",
      dueTime: "19:30",
      completed: false,
    },
    ID9: {
      name: "G",
      dueDate: "2021/02/02",
      dueTime: "11:15",
      completed: false,
    },
    ID10: {
      name: "F",
      dueDate: "2021/03/22",
      dueTime: "18:30",
      completed: false,
    },
    ID11: {
      name: "H",
      dueDate: "2021/03/22",
      dueTime: "18:30",
      completed: false,
    },
    ID12: {
      name: "I",
      dueDate: "2021/03/22",
      dueTime: "18:30",
      completed: false,
    },
    ID13: {
      name: "J",
      dueDate: "2021/03/22",
      dueTime: "18:30",
      completed: false,
    },
    ID14: {
      name: "K",
      dueDate: "2021/03/22",
      dueTime: "18:30",
      completed: false,
    },
    ID15: {
      name: "L",
      dueDate: "2021/03/22",
      dueTime: "18:30",
      completed: false,
    },
    */
  },
  searchBarText: "",
  sortTerm: "name",
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
  setSortTerm({ commit }, value) {
    commit("setSortTerm", value);
  },
  fbReadData({commit}) {

    let userId = firebaseAuth.currentUser.uid
		//let userTasks = firebaseDb.ref('tasks/' + userId)

    console.log(userId)
  }
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
