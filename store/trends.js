export const state = () => ({
  daily: [],
  weekly: []
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
  }
}

export const mutations = {
  putDaily(state, payload) {
    state.daily = { ...payload }
  },

  putWeekly(state, payload) {
    state.weekly = payload
  }
}

export const actions = {
  async fetchTrends({ commit }) {
    const [daily, weekly] = await Promise.all([
      this.$axios.get('https://9c14d409.ngrok.io/api/getDailyUpdates'),
      this.$axios.get('https://9c14d409.ngrok.io/api/getWeeklyUpdates')
    ])
    commit('putDaily', daily.data)
    commit('putWeekly', weekly.data)
  },

  updateDaily({ commit }, payload) {
    commit('putDaily', payload)
  },

  updateWeekly({ commit }, payload) {
    commit('putWeekly', payload)
  }
}
