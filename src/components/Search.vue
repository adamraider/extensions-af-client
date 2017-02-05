<template lang="pug">
  .content(v-show="!$store.state.loading")
    .search
      label(for="search") 🔍
      input(ref="input" type="text" id="search" placeholder="Search for dope af Chrome extensions..." v-model="search")
    extension(v-for="extension in filteredExtensions", :extension="extension")
</template>

<script>
import Extension from './Extension'

export default {
  components: { Extension },
  data () {
    return {
      search: ''
    }
  },
  mounted () {
    this.$refs.input.focus()
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$store.commit('START_LOADING')
      this.$store.dispatch('getPublished').then(() => {
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
.search
  margin-bottom: 2em
  background-color: rgba(0,0,0,.75)
  border-radius: 4px
  overflow: hidden
  display: flex
  label
    font-size: 1.6rem
    padding: 0.4em 0.1em 0 1em
  input
    background-color: transparent
    border: none
    outline: none
    flex-grow: 1
    width: 100%
    padding: 0.6em 1.0em 0.6em 0.5em
    width: 100%
    color: #fff
    font-weight: bold
    font-style: italic
    font-size: 1.2em
    font-family: inherit
</style>