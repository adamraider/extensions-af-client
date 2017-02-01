<template lang="pug">
  .content
    .heading Login
    .error(v-if="error") {{ error }}
    form(@submit.prevent="login()")
      input(type="text" placeholder="email" v-model="email")
      input(type="password" placeholder="password" v-model="password")
      button(type="submut") Submit
</template>

<script>
import Extension from './Extension'

export default {
  components: { Extension },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  created () {
  },
  methods: {
    login () {
      this.$store.commit('START_LOADING')
      this.$store.dispatch('login', { auth: {
        email: this.email,
        password: this.password
      }}).then(res => {
        this.$store.commit('FINISH_LOADING')
        this.$router.push('/admin')
      }).catch(res => {
        this.$store.commit('FINISH_LOADING')
        this.error = 'Please check your email and password'
      })
    }
  }
}
</script>

<style lang="sass" scoped>
form
  display: flex
  flex-direction: column
  justify-content: space-between
  @media(min-width: 580px)
    flex-direction: row

.error
  color: #fff
  font-weight: bold
  display: block
  margin-bottom: 10px

input, button
  padding: 0.5em 1em
  font-size: inherit
  font-family: inherit
  border: none
  outline: none
  flex-grow: 1
  &:not(:last-child)
    @media(min-width: 580px)
      margin-right: 10px
  margin-bottom: 10px

button
  background-color: #000
  color: #fff
</style>