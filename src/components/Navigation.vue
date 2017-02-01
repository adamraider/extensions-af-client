<template lang="pug">
  .nav
    router-link.logo(to="/today" active-class="active") extensions.af
    ul.nav__menu
      li: router-link(to="/today" active-class="active")
        span.link__icon 💡&nbsp;
        span.link__name Today
      li: router-link(to="/trending" active-class="active")
        span.link__icon 🔥&nbsp;
        span.link__name Trending
      li: router-link(to="/about" active-class="active")
        span.link__icon 😎&nbsp;
        span.link__name About
      li: router-link(to="/search" active-class="active")
        span.link__icon 🕵️&nbsp;
        span.link__name Search
      li(v-if="adminIsAuthenticated"): router-link(to="/admin" active-class="active")
        span.link__icon 🔒&nbsp;
        span.link__name Admin
      li(v-if="adminIsAuthenticated"): a(href="javascript:;" @click="logout()")
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
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
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
  @media(min-width: 800px)
    position: fixed
    padding: 0 70px 0 30px
    width: 270px
    float: left

.logo
  color: #000
  font-size: 2em
  font-weight: bold
  font-style: italic
  text-align: center
  text-decoration: none
  @media(min-width: 800px)
    text-align: left

.nav__menu
  color: #fff
  font-size: 1.4em
  font-weight: bold
  padding: 0
  display: flex
  justify-content: space-between
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
  &:hover
    cursor: pointer

</style>