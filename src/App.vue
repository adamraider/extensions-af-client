<template lang="pug">
  #app
    app-nav
    .content(v-show="$store.state.loading"): spinner
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
$icomoon-font-base: '/static/icomoon/fonts/'
@import '../static/icomoon/style'

html
  min-height: 100%

body
  margin: 40px 0 0 0
  padding: 0
  background: linear-gradient(135deg, #ffb948, #ff45ad, #a723ff)
  background-attachment: fixed
  background-color: #a723ff
  transition: background 0.5s
  @media(min-width: 800px)
    margin-top: 0
*
  box-sizing: border-box

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  padding: 80px 1rem
  margin: 0 auto
  max-width: 1060px
  font-size: 12px
  @media(min-width: 800px)
    padding: 80px 2rem
    font-size: 16px

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

$navWidth: 270px
.content
  padding: 0 0.3em
  margin-bottom: 4rem
  position: relative
  @media(min-width: 800px)
    padding: 0 0 0 70px
    float: left
    width: calc(100% - #{$navWidth})
    margin-left: $navWidth

.heading
  font-family: Futura, 'Avenir', Helvetica, Arial, sans-serif
  font-size: 1.5em
  color: #fff
  margin-bottom: 0.8em

</style>
