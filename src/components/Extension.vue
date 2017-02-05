<template lang="pug">
  .extension(:class="classList")
    .trending(v-if="extension.trending") 🔥
    .heart.icon-(@click="like")
    .heart__form.drop(v-if="showHeartForm")
      template(v-if="voteDone")
        .heart__form__text Thank you for the vote!
      template(v-else)
        .heart__form__text Enter email to vote!
        form(action="https://dev.us10.list-manage.com/subscribe/post?u=3d974b5065abb2dae62acced3&amp;id=81fde23d1a" method="post" target="_blank" id="mc-embedded-subscribe-form")
          .field
            input(type="email" name="MERGE0" placeholder="elon@tesla.com" v-model="email")
            button.field__icon(type="submit") 😍
    a.rocket(:href="extension.url" target="_blank") 🚀&nbsp; Visit
    .extension__imageWrapper
      img.extension__image(:src="extension.image")
    .extension__info
      .extension__name {{ extension.name }}
      .extension__desc {{ extension.desc }}
</template>

<script>
export default {
  props: {
    extension: {
      required: true
    },
    admin: {
      default: false
    }
  },
  data () {
    return {
      email: '',
      showHeartForm: false,
      voteDone: false
    }
  },
  methods: {
    like (e) {
      this.showHeartForm = true
    },

    submitHeart (e) {
      const url = 'https://dev.us10.list-manage.com/subscribe/post?u=3d974b5065abb2dae62acced3&amp;id=81fde23d1a'
      this.$http.post(url, {
        EMAIL: this.email
      }).then(res => {
        this.voteDone = true
      })
    }
  },
  computed: {
    classList () {
      return {
        'extension--featured': this.extension.featured,
        'extension--published': (this.admin && this.extension.published)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$extensionHeight: 7rem
$rocketSize: 2em

.heart
  position: absolute
  right: 15px
  top: 10px
  font-size: 1.3em
  color: #ff4564
  display: block
  &:before
    content: "\e907"
  &:hover
    cursor: pointer
    &:before
      content: "\e908"

.heart__form
  background-color: #281427
  padding: 1em
  color: #fff
  position: absolute
  top: -10px
  box-shadow: 0 0 14px rgba(0,0,0,.3)
  right: 40px
  font-weight: bold
  font-style: italic
  border-radius: 4px
  z-index: 100
  &::after
    content: ''
    display: block
    margin: 0 auto
    clear: both
    position: absolute
    top: 15px
    right: -8px
    width: 0
    height: 0
    border-bottom: 10px solid transparent
    border-left: 16px solid #281427
    border-top: 10px solid transparent

  .field
    background-color: #372536
    border-radius: 4px
    display: flex

  .field__icon
    font-style: initial
    font-size: 1.2em
    padding: 0 0.8em 0 0.4em
    background: none
    border: none

  input
    background-color: transparent
    border-radius: 4px
    border: none
    padding: 0.4em 0.4em 0.4em 0.7em
    font-size: inherit
    font-weight: inherit
    font-style: inherit
    font-family: inherit
    color: inherit
    &:focus
      outline: none
      border: none

.heart__form__text
  margin-bottom: 4px

.trending
  position: absolute
  left: -48px
  font-size: 2em
  line-height: $extensionHeight

.rocket
  background-color: #ff4564
  position: absolute
  border-radius: 15px
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1)
  text-align: center
  line-height: 1.4
  font-weight: bold
  font-style: italic
  color: #fff
  padding: 0.5em 1.2em
  right: 15px
  bottom: -15px
  transition: all 0.2s
  transform: perspective(500px)
  text-decoration: none
  &:hover
    transform: perspective(500px) translateZ(50px)
    cursor: pointer
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.1)

.extension
  background-color: #fff
  width: 100%
  border-radius: 10px
  position: relative
  padding: 1.5em
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.12)
  display: flex
  &::after
    content: ''
    clear: both
    display: block
  &:not(:last-child)
    margin-bottom: 1.6em

.extension--featured
  background: #281427
  color: #fff
  box-shadow: 0 0 20px 0 rgba(189, 43, 235, 0.75)

.extension__imageWrapper
  display: flex
  align-items: center
  justify-content: center
  float: left
  padding-right: 1.5em

.extension__image
  width: 6em
  height: auto

.extension__info
  text-align: left
  overflow: hidden

.extension__name
  font-weight: bold
  font-size: 1.3em
  margin-bottom: 0.4em
</style>