import Vue from 'vue'
import api from '../api'
import * as types from './types'

export const getPublished = ({ commit }, payload) => {
  let p = api.getPublished(payload)

  p.then(res => {
    commit(types.SET_EXTENSIONS, {
      extensions: res.body
    })
  })

  return p
}

export const getAllExtensions = ({ commit }, payload) => {
  let p = api.getAllExtensions(payload)

  p.then(res => {
    commit(types.SET_EXTENSIONS, {
      extensions: res.body
    })
  })

  return p
}

export const getTrending = ({ commit }, payload) => {
  let p = api.getTrending(payload)

  p.then(res => {
    commit(types.SET_EXTENSIONS, {
      extensions: res.body
    })
  })

  return p
}

// extension resource
export const updateExtension = ({ commit }, { extension }) => {
  console.log('update ext', extension)
  let p = api.updateExtension(extension.id, extension)

  p.then(res => {
    commit(types.UPDATE_EXTENSION, { extension })
  })
  p.then(res => {
    console.log('Extension updated', res)
  })
  p.catch(res => {
    console.log('There was an error updating the extension.')
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
