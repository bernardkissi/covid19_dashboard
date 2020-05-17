export const state = () => ({
  world: []
})

export const getters = {
  getWorld(state) {
    return state.world
  }
}

export const mutations = {
  putWorld(state, payload) {
    state.world = payload
  }
}

export const actions = {
  async fetchWorld({ commit }) {
    const response = await this.$axios.get(
      'https://93d50f2a.ngrok.io/api/world'
    )
    commit('putWorld', {
      time: response.data.updated,
      data: response.data.summary
    })
  },

  updateWorld({ commit }, payload) {
    commit('putWorld', { time: payload.updated, data: payload.summary })
  }
}
