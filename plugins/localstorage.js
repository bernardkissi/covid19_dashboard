// plugins/vuex-persistedstate.js
import createPersistedState from 'vuex-persistedstate'

const NAME_SPACE = 'vuex'

export default ({ store, isHMR, from }) => {
  if (isHMR) return
  if (process.client) {
    createPersistedState({
      key: NAME_SPACE,
      paths: ['regions', 'trends', 'summaries']
      // ...
    })(store)
  }
}
