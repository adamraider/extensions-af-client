<template lang="pug">
  .content(v-show="!$store.state.loading")
    .heading(v-if="featuredExtensions.length > 0") Featured 🔑
    extension(v-for="extension in featuredExtensions", :extension="extension")
    br
    .heading {{ formattedDate }}
    extension(v-for="extension in nonFeaturedExtensions", :extension="extension")
</template>

<script>
import Extension from './Extension'
import moment from 'moment'

export default {
  components: { Extension },
  data () {
    return {
      date: new Date()
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
    },
    formattedDate () {
      return moment(this.date).format('MMMM Do YYYY')
    }
  }
}
</script>

<style lang="sass" scoped>
</style>