<template lang="pug">
  .content(v-show="!$store.state.loading")
    .heading Featured 🔑
    extension(v-for="extension in featuredExtensions", :extension="extension")
    br
    .heading February 21, 2017
    extension(v-for="extension in nonFeaturedExtensions", :extension="extension")
</template>

<script>
import Extension from './Extension'

export default {
  components: { Extension },
  data () {
    return {
      extensions: []
    }
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
    featuredExtensions () {
      return this.$store.state.extensions.filter(ext => {
        return ext.featured
      })
    },
    nonFeaturedExtensions () {
      return this.$store.state.extensions.filter(ext => {
        return !ext.featured
      })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>