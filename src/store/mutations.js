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

  [types.UPDATE_EXTENSION] (state, { extension }) {
    let indexOfExt
    for (var i in state.extensions) {
      if (state.extensions[i].id === extension.id) {
        indexOfExt = i
        break
      }
    }
    state.extensions.splice(indexOfExt, 1, extension)
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
