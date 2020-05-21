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
    const response = await this.$axios.get('http://206.189.16.193//api/world')
    commit('putWorld', response.data)
  },

  updateWorld({ commit }, payload) {
    commit('putWorld', payload.data)
  }
}
