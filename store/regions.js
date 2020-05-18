export const state = () => ({
  regions: [],
  region: {},
  mapRegion: '',
  totals: [],
  caseType: 'confirmed'
})

export const getters = {
  getRegions(state) {
    return state.regions
  },
  getRegion(state) {
    return state.region
  },
  getTotals(state) {
    return state.totals
  },
  getMapRegion(state) {
    return state.mapRegion
  },
  getCaseType(state) {
    return state.caseType
  }
}

export const mutations = {
  addRegion(state, payload) {
    state.regions = [...payload]
  },

  putTotals(state, payload) {
    state.totals = payload
  },

  putRegion(state, payload) {
    const data = state.regions.filter((item) => {
      return item.name === payload
    })
    state.region = data[0]
    state.mapRegion = data[0].name
  },

  updateRegion(state, payload) {
    const newrr = state.regions.map((region) => {
      const found = payload.find((s) => s.id === region.id)
      if (found) {
        region = Object.assign(region, found)
      }
      return region
    })

    state.regions = newrr
  },

  putCase(state, payload) {
    state.caseType = payload
  }
}

export const actions = {
  async fetchRegions({ commit }) {
    const regions = await this.$axios.get(
      'https://d85ed9c7.ngrok.io/api/getRegionalData'
    )
    commit('addRegion', regions.data)
    commit('putRegion', 'Greater Accra')
  },

  fetchRegion({ commit }, payload) {
    commit('putRegion', payload)
  },

  fetchCase({ commit }, payload) {
    commit('putCase', payload)
  },

  updateRegions({ commit }, payload) {
    commit('addRegion', payload.data[0])
  }
}
