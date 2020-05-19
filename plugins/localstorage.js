// plugins/vuex-persistedstate.js
import createPersistedState from 'vuex-persistedstate'

const NAME_SPACE = 'vuex'

export default ({ store, isHMR, isClient }) => {
  if (isHMR) return
  if (isClient) {
    createPersistedState({
      key: NAME_SPACE,
      paths: ['regions', 'trends', 'summaries']
      // ...
    })(store)
  }
}
