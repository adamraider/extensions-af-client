import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

let API_ROOT = process.env.API_ROOT

export default {
  getExtensions () {
    return Vue.http.get(API_ROOT + 'extensions')
  },

  login (data) {
    return Vue.http.post(API_ROOT + 'user_token', data)
  }
}
