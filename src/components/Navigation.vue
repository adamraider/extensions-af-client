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
    button.submit(type="submit") Submit An Extension
    //- form.nav__form
    //-   input(type="email" placeholder="Email")
    //-   input(type="text" placeholder="Extension Name")
    //-   input(type="url" placeholder="Link to extension")
    //-   textarea(placeholder="Describe your extension in 140 characters" rows="3")
      
</template>

<script>
import NavToggle from './NavToggle.vue'

export default {
  components: { NavToggle },
  data () {
    return {
      navIsOpen: false
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
    align-items: center
    justify-content: center
    font-size: 1.5rem
    position: fixed
    width: 100%
    top: 0
    left: 0
    height: 100vh
    z-index: -1
    background-color: #281427
    padding: 0 2.5rem
    li
      a
        color: #655764 !important
        margin-bottom: 0.3rem
        &:hover, &.active
          color: #fff !important
  @media(min-width: 800px)
    display: block
    margin-bottom: 10em
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

.nav__form
  input, textarea
    font-family: inherit
    font-weight: bold
    font-style: italic
    border: none
    outline: none
    border-radius: 10px
    font-size: 0.9em
    color: #fff
    padding: 0.4em 1em
    margin-bottom: .43em
    background-color: #281427
    width: 100%
    &::-webkit-input-placeholder
       color: #fff

    &:-moz-placeholder /* Firefox 18- */
       color: #fff 

    &::-moz-placeholder  /* Firefox 19+ */
       color: #fff 

    &:-ms-input-placeholder  
       color: #fff

.submit
  border-radius: 2em
  background: linear-gradient(135deg, #ffb948, #ff45ad, #a723ff)
  box-shadow: 0 0 20px rgba(0,0,0,.1)
  outline: none
  border: none
  color: #fff
  padding: 0.5em 1em
  width: 100%
  font-size: 1em
  font-family: inherit
  font-weight: bold
  font-style: italic
  margin-bottom: 1.5em
  display: none
  @media(min-width: 800px)
    display: block
  &:hover
    cursor: pointer

</style>