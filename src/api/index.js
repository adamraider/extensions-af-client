import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const API_ROOT = process.env.API_ROOT
const ExtensionResource = Vue.resource(API_ROOT + 'extensions{/id}')

// config
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next) => {
  request.headers = request.headers || {}
  let jwt = Vue.cookie.get('jwt')
  if (jwt) {
    request.headers.set('Authorization', 'Bearer ' + jwt)
  }
  next((response) => {
    if (response.status === 401) {
      console.log('User unauthorized', response)
      window.location.hash = '#/login'
    }
  })
})

export default {
  getAllExtensions () {
    return Vue.http.get(API_ROOT + 'extensions/all')
  },

  getPublished () {
    return Vue.http.get(API_ROOT + 'extensions/published')
  },

  getTrending () {
    return Vue.http.get(API_ROOT + 'extensions/trending')
  },

  // Auth
  login (data) {
    return Vue.http.post(API_ROOT + 'user_token', data)
  },

  // Extension Resource
  getExtension (id) {
    return ExtensionResource.get({ id })
  },

  createExtension (data) {
    return Vue.http.post(API_ROOT + 'extensions', data, {
      emulateJSON: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  updateExtension (id, extension) {
    return ExtensionResource.update({ id }, { extension })
  },

  deleteExtension (id) {
    return ExtensionResource.delete({ id })
  }
}
