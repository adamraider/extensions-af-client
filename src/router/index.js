import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home.vue'
import Trending from '../components/Trending.vue'
import About from '../components/About.vue'
import Search from '../components/Search.vue'
import Admin from '../components/Admin.vue'
import Login from '../components/Login.vue'
import Submit from '../components/Submit.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/today',
      component: Home
    },
    {
      path: '/trending',
      component: Trending
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/submit',
      component: Submit
    },
    {
      path: '/admin',
      component: Admin,
      meta: {
        protected: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      redirect: '/today'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.protected) {
    let jwt = Vue.cookie.get('jwt')

    if (jwt) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})

export default router
