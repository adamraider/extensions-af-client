<template lang="pug">
  .nav
    router-link.logo(to="/today" active-class="active") extensions.af
    nav-toggle(:active="navIsOpen", @open="openNav()", @close="closeNav")
    ul.nav__menu(:class="{ 'nav__menu--active': navIsOpen }")
      li(@click="closeNav()"): router-link(to="/today" active-class="active")
        span.link__icon 💡&nbsp;
        span.link__name Today
      li(@click="closeNav()"): router-link(to="/trending" active-class="active")
        span.link__icon 🔥&nbsp;
        span.link__name Trending
      li(@click="closeNav()"): router-link(to="/about" active-class="active")
        span.link__icon 😎&nbsp;
        span.link__name About
      li(@click="closeNav()"): router-link(to="/search" active-class="active")
        span.link__icon 🕵️&nbsp;
        span.link__name Search
      li(@click="closeNav()" v-if="adminIsAuthenticated"): router-link(to="/admin" active-class="active")
        span.link__icon 🔒&nbsp;
        span.link__name Admin
      li(@click="closeNav()" v-if="adminIsAuthenticated"): a(href="javascript:;" @click="logout()")
        span.link__icon 🛁&nbsp;
        span.link__name Logout
      .submit.nav__submit--mobile(@click="closeNav()"): router-link(to="/submit")
        span Submit an Extension
    .nav__form.newExtensionForm
      .done(v-if="done")
        h1.heading 👍 Thanks for your submission
      template(v-else)
        .error(v-if="error") Uh oh, there was an error: {{ error }}
        form.form(ref="form" @submit="validateBeforeSubmit(e)")
          .inputs(:class="{ 'is-showing': showForm }")
            .field
              input(type="email"
                    v-model="newExtension.email"
                    placeholder="elon@tesla.com"
                    name="email"
                    v-validate="'required|email'")
              .field__error {{ errors.first('email') }}
            .field
              input(type="text"
                    v-model="newExtension.name"
                    placeholder="Netflix Parrot"
                    name="name"
                    v-validate="'required'")
              .field__error {{ errors.first('name') }}
            .field
              input(type="text"
                    v-model="newExtension.url"
                    placeholder="https://extensions.af"
                    name="url"
                    v-validate="'required|url'")
              .field__error {{ errors.first('url') }}
            .field
              input(type="file"
                    ref="file"
                    name="image"
                    @change="updateFile"
                    placeholder="Extension image (200x200)"
                    required)
              .field__error {{ errors.first('image') }}
            .field
              textarea(placeholder="Describe your extension in 140 characters"
                       v-model="newExtension.desc"
                       rows="3"
                       name="desc"
                       v-validate="'required|max:140'")
              .field__error {{ errors.first('desc') }}
          button.submit(href="javascript:;" @click="validateBeforeSubmit") Submit an awesome af extension
</template>

<script>
import NavToggle from './NavToggle'
import api from '../api'
import FormData from 'form-data'

export default {
  components: { NavToggle },
  data () {
    return {
      navIsOpen: false,
      done: false,
      error: null,
      showForm: false,
      newExtension: {
        email: '',
        name: '',
        desc: '',
        url: ''
      }
    }
  },
  watch: {
    '$route' () {
      this.showForm = false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },

    openNav () {
      this.navIsOpen = true
    },

    closeNav () {
      this.navIsOpen = false
    },

    createExtension () {
      let self = this
      let data = new FormData(this.newExtension)
      data.append('extension[name]', this.newExtension.name)
      data.append('extension[url]', this.newExtension.url)
      data.append('extension[desc]', this.newExtension.desc)
      data.append('extension[image]', this.newExtension.image)
      data.append('extension[email]', this.newExtension.email)

      console.log('submitting ext', data)
      api.createExtension(data).then(res => {
        console.log('Extension created', res)
        self.extension = {
          email: '',
          name: '',
          url: '',
          desc: ''
        }
        self.done = true
        self.error = null
      }).catch(res => {
        console.log('Error creating extension', res)
        self.error = res.body.error
      })
    },

    updateFile (e) {
      let file = e.target.files[0] || e.dataTransfer.files[0] || e.target.result
      this.$set(this.newExtension, 'image', file)
    },

    validateBeforeSubmit (e) {
      e.preventDefault()
      if (this.showForm) {
        this.$validator.validateAll().then(() => {
          this.createExtension()
        })
      } else {
        this.showForm = true
      }
    }
  },
  computed: {
    adminIsAuthenticated () {
      return this.$store.state.user.authenticated
    }
  }
}
</script>

<style lang="sass" scoped>
.nav
  padding: 0 0.3em
  position: fixed
  @media(max-width: 799px)
    width: 100%
    top: 0
    left: 0
    padding: 1.5rem 1.3rem
    z-index: 2000
    background-color: #281427
  @media(min-width: 800px)
    padding: 0
    width: 270px
    float: left
    height: 100%
    overflow-y: auto

.logo
  color: #fff
  background-color: rgba(255,255,255,.15)
  padding: 0.3rem 1.3rem 0.3rem 1.2rem
  box-shadow: 0 0 20px 0 rgba(0,0,0,.1)
  font-size: 2em
  font-weight: bold
  font-style: italic
  text-align: center
  text-decoration: none
  display: inline-block
  border-radius: 5px
  @media(min-width: 800px)
    margin-bottom: 2rem
    text-align: left

.navToggle
  float: right
  display: inline-block
  margin-top: 5px !important
  @media(min-width: 800px)
    display: none

.nav__menu
  color: #fff
  font-size: 1.4em
  font-weight: bold
  padding: 0
  display: none
  margin-top: 0
  @media(max-width: 799px)
    display: none
    &.nav__menu--active
      display: flex
    flex-direction: column
    justify-content: center
    font-size: 1.5rem
    position: fixed
    width: 100%
    top: 0
    left: 0
    height: 100vh
    z-index: -1
    background-color: #281427
    padding: 0 2.5rem 0 4rem
    li
      a
        color: #655764 !important
        margin-bottom: 0.3rem
        &:hover, &.active
          color: #fff !important
  @media(min-width: 800px)
    display: block
  li
    list-style-type: none
    float: left
    @media(min-width: 800px)
      float: none
    a
      color: inherit
      text-decoration: none
      display: block
      &:hover, &.active
        color: #281427

.nav__toggle
  display: inline-block
  float: right
  font-size: 1.5rem
  color: #fff
  @media(min-width: 800px)
    display: none

.link__icon
  width: 1.5em

.link__icon, .link__name
  display: inline-block
  vertical-align: middle

.link__icon
  font-size: 1.3em

.link__name
  font-style: italic

.nav__submit--mobile
  position: absolute
  bottom: 3.5em
  margin: 0 auto
  left: 0
  right: 0
  margin-left: auto
  margin-right: auto
  text-align: center
  width: auto
  max-width: 197px
  display: inline-block
  a
    text-decoration: none
    color: inherit
  @media(max-width: 799px)
    display: block
  display: none

.inputs
  max-height: 0px
  transition: max-height 0.5s
  overflow: hidden
  &.is-showing
    max-height: 300px

.has-errors
  border: 1px solid red

.nav__form
  @media(max-width: 799px)
    display: none
</style>