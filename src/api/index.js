import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

let API_ROOT = process.env.API_ROOT

export default {
  getPublished () {
    return Vue.http.get(API_ROOT + 'extensions')
  },

  getTrending () {
    return Vue.http.get(API_ROOT + 'extensions/trending')
  },

  login (data) {
    return Vue.http.post(API_ROOT + 'user_token', data)
  }
}
