import Vue from 'vue'
import api from '../api'
import * as types from './types'

export const getExtensions = ({ commit }, payload) => {
  let p = api.getExtensions(payload)

  p.then(res => {
    commit(types.SET_EXTENSIONS, {
      extensions: res.body
    })
  })

  return p
}

// auth

export const login = ({ commit }, payload) => {
  let p = api.login(payload)

  p.then(res => {
    if (res.ok) {
      Vue.cookie.set('jwt', res.data.jwt)
      commit(types.AUTHENTICATE)
    }
  })

  return p
}

export const logout = ({ state, commit }, payload) => {
  Vue.cookie.delete('jwt')
  commit(types.LOGOUT)
}

export const checkAuth = ({ commit }, payload) => {
  let jwt = Vue.cookie.get('jwt')
  if (jwt) {
    commit(types.AUTHENTICATE)
  }
}
