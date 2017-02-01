<template lang="pug">
  #app
    app-nav
    .content(v-show="$store.state.loading"): spinner
    template(v-show="!$store.state.loading")
      transition(name="fade")
        router-view
</template>

<script>
import AppNav from './components/Navigation'
import Spinner from './components/Spinner'

export default {
  name: 'app',
  created () {
    this.$store.dispatch('checkAuth')
  },
  components: {
    AppNav, Spinner
  }
}
</script>

<style lang="sass">
html
  min-height: 100%

body
  background: linear-gradient(135deg, #ffb948, #ff45ad, #a723ff)
  background-color: #a723ff
  transition: background 0.5s

*
  box-sizing: border-box

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin: 80px auto
  max-width: 1060px

// transition
.fade-enter-active, .fade-leave-active
  transition: all 0.5s ease

.fade-enter, .fade-leave-active
  opacity: 0

.fade-enter
  transform: translateX(-20px)

.fade-leave-active
  transform: translateX(20px)

.fade-enter-active
  transition-delay: 0.5s

.content
  padding: 0 30px
  @media(min-width: 800px)
    float: left
    width: calc(100% - 270px)

.heading
  font-family: Futura, 'Avenir', Helvetica, Arial, sans-serif
  font-size: 1.5rem
  color: #fff
  margin-bottom: 0.8rem

.loading
  font-size: 2rem
  font-weight: bold
  text-align: center
  color: #fff
</style>
