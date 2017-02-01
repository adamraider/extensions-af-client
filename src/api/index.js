import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

let API_ROOT = process.env.API_ROOT

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

  login (data) {
    return Vue.http.post(API_ROOT + 'user_token', data)
  }
}

// configuration
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next) => {
  request.headers = request.headers || {}
  let token = Vue.cookie.get('jwt')
  if (token) {
    request.headers.set('Authorization', 'Bearer ' + token)
  }
  next((response) => {
    if (response.status === 401) {
      console.log('User unauthorized', response)
      window.location.hash = '#/login'
    }
  })
})
