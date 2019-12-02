import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    saveTask(state, task) {
      state.tasks.push(task);

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, {id, tags, date, description, status}) {
      let idx = state.tasks.findIndex(t => t.id === id);
      let task = state.tasks[idx];

      state.tasks[idx] = {...task, tags, date, description, status};

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  actions: {
    saveTask({commit}, task) {
      commit('saveTask', task);
    },
    updateTask({commit}, task) {
      commit('updateTask', task);
    }
  },
  getters: {
    tasksByStatus: s => status => s.tasks.filter(t => t.status === status),
    taskById: s => id => s.tasks.find(t => t.id === id)
  },
  modules: {
  }
})
