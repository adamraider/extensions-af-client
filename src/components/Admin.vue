<template lang="pug">
  .content(v-show="!$store.state.loading")
    .heading Review Extensions
    admin-extension(v-for="extension in $store.state.extensions", :extension="extension")
</template>

<script>
import AdminExtension from './AdminExtension'

export default {
  components: { AdminExtension },
  data () {
    return {
      extensions: []
    }
  },
  beforeCreate () {
    document.body.classList.add('body--admin')
  },
  created () {
    this.fetchData()
  },
  beforeDestroy () {
    document.body.classList.remove('body--admin')
  },
  methods: {
    fetchData () {
      this.$store.commit('START_LOADING')

      this.$store.dispatch('getAllExtensions').then(() => {
        this.$store.commit('FINISH_LOADING')
      })
    }
  }
}
</script>

<style lang="sass">
.body--admin
  background: #281427
  .logo
    color: #fff

  $extensionBorderSize: 5px
  .extension--published
    background-color: #fff
    color: #535353
    z-index: 1
    background: linear-gradient(135deg, #ffb948, #ff45ad, #a723ff)
    &::before
      position: absolute
      top: $extensionBorderSize
      left: $extensionBorderSize
      width: calc(100% - #{$extensionBorderSize*2})
      height: calc(100% - #{$extensionBorderSize*2})
      border-radius: 8px
      content: ''
      z-index: -1
      background: #fff
      border: $extensionBorderSize*2 solid transparent
      box-sizing: border-box

  .nav__menu
    li
      a:hover, a.active
        color: #ff45ad
        position: relative
        display: inline-block
</style>