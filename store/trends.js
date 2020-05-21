export const state = () => ({
  daily: [],
  weekly: [],
  theme: 'light'
})

export const getters = {
  getDaily(state) {
    return state.daily
  },
  getWeekly(state) {
    return state.weekly
  },
  getTotals(state) {
    return state.daily.data
  },
  getTheme(state) {
    return state.theme
  }
}

export const mutations = {
  putDaily(state, payload) {
    state.daily = { ...payload }
  },

  putWeekly(state, payload) {
    state.weekly = payload
  },

  putTheme(state, payload) {
    state.theme = payload
  }
}

export const actions = {
  async fetchTrends({ commit }) {
    const [daily, weekly] = await Promise.all([
      this.$axios.get('http://206.189.16.193/api/getDailyUpdates'),
      this.$axios.get('http://206.189.16.193/api/getWeeklyUpdates')
    ])
    commit('putDaily', daily.data)
    commit('putWeekly', weekly.data)
  },

  updateDaily({ commit }, payload) {
    commit('putDaily', payload)
  },

  updateWeekly({ commit }, payload) {
    commit('putWeekly', payload)
  },

  fetchTheme({ commit }, payload) {
    commit('putTheme', payload)
  }
}
