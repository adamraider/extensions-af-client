<template lang="pug">
  .content
    .search
      input(ref="input" type="text" placeholder="Search for dope af Chrome extensions..." v-model="search")
    extension(v-for="extension in filteredExtensions", :extension="extension")
</template>

<script>
import Extension from './Extension'

export default {
  components: { Extension },
  data () {
    return {
      search: null
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
      this.$store.dispatch('getExtensions').then(() => {
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

<style lang="sass" scoped>
.search
  margin-bottom: 2rem
  input
    background-color: rgba(0,0,0,.75)
    border: none
    outline: none
    padding: 0.6rem 1.1rem
    border-radius: 4px
    width: 100%
    color: #fff
    font-weight: bold
    font-style: italic
    font-size: 1.2rem
    font-family: inherit
</style>