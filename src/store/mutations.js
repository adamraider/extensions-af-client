import * as types from './types'

export const state = {
  user: {
    authenticated: false
  },
  extensions: [],
  loading: false
}

export const mutations = {
  [types.SET_EXTENSIONS] (state, { extensions }) {
    state.extensions = extensions
  },

  [types.START_LOADING] (state) {
    state.loading = true
  },

  [types.FINISH_LOADING] (state) {
    state.loading = false
  },

  [types.AUTHENTICATE] (state) {
    state.user.authenticated = true
  },

  [types.LOGOUT] (state) {
    state.user.authenticated = false
  }
}
