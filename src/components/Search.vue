<template lang="pug">
  .content
    .search
      input(ref="input" type="text" placeholder="Search for dope af Chrome extensions...")
    extension(v-for="extension in $store.state.extensions", :extension="extension")
</template>

<script>
import Extension from './Extension'

export default {
  components: { Extension },
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