<template lang="pug">
  .content
    //- .heading Featured 🔑
    //- extension(featured="true")
    //- br
    .heading February 21, 2017
    extension(v-for="extension in $store.state.extensions", :extension="extension")
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

      this.$store.dispatch('getExtensions').then(() => {
        this.$store.commit('FINISH_LOADING')
      })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>