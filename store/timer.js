export const state = () => ({
  time: null
})

export const getters = {
  getTimer(state) {
    return state.time
  }
}

export const mutations = {
  putTimer(state, payload) {
    state.time = payload
  }
}

export const actions = {
  fetchTimer({ commit }, payload) {
    commit('putTimer', payload)
  }
}
