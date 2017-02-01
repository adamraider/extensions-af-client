<template lang="pug">
  .content
    .heading Trending
    extension(v-for="extension in $store.state.extensions" ,:extension="extension")
</template>

<script>
import Extension from './Extension'

export default {
  components: { Extension },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$store.commit('START_LOADING')
      this.$store.dispatch('getTrending').then(() => {
        this.$store.commit('FINISH_LOADING')
      })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>