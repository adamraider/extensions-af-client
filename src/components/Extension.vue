<template lang="pug">
  .extension(:class="classList")
    .trending(v-if="extension.trending") 🔥
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
      name: 'This is a name'
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