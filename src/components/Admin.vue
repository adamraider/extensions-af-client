<template lang="pug">
  .content(v-show="!$store.state.loading")
    .heading Review Extensions
    .search
      label(for="search") 🔍
      input(ref="input" type="text" id="search" placeholder="Search for dope af Chrome extensions..." v-model="search")
    admin-extension(v-for="extension in filteredExtensions", :extension="extension")
</template>

<script>
import AdminExtension from './AdminExtension'

export default {
  components: { AdminExtension },
  data () {
    return {
      search: ''
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
  },
  computed: {
    filteredExtensions () {
      return this.$store.state.extensions.filter(function (extension) {
        let searchRegex = new RegExp(this.search, 'i')
        return (
          searchRegex.test(extension.name) ||
          searchRegex.test(extension.url) ||
          searchRegex.test(extension.desc)
        )
      }.bind(this))
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
  .submit
    background: linear-gradient(135deg, #ffb948, #ff45ad, #a723ff)
    box-shadow: 0 0 20px rgba(0,0,0,.3)
</style>