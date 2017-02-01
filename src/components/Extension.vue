<template lang="pug">
  .extension(:class="{ 'extension--featured': extension.featured }")
    .trending(v-if="extension.trending") 🔥
    .rocket 🚀
    .extension__imageWrapper
      img.extension__image(:src="extension.img")
    .extension__info
      .extension__name {{ extension.name }}
      .extension__desc {{ extension.desc }}
</template>

<script>
export default {
  props: {
    extension: {
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
$extensionHeight: 150px
$rocketSize: 60px

.trending
  position: absolute
  left: -48px
  font-size: 2rem
  line-height: $extensionHeight

.rocket
  width: $rocketSize
  height: $rocketSize
  background-color: #ff4564
  position: absolute
  font-size: 2rem
  border-radius: 15px
  box-shadow: 0 0 15px rgba(0,0,0,.1)
  text-align: center
  line-height: 70px
  right: -20px
  top: -20px
  transition: all 0.2s
  transform: perspective(500px)
  &:hover
    transform: perspective(500px) translateZ(50px)
    cursor: pointer
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.1)

.extension
  background-color: #fff
  width: 100%
  height: $extensionHeight
  border-radius: 10px
  position: relative
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.1)
  color: #c46bv6
  &:not(:last-child)
    margin-bottom: 1.6rem

.extension--featured
  background: #281427
  color: #fff

.extension__imageWrapper
  display: flex
  align-items: center
  justify-content: center
  width: $extensionHeight
  height: $extensionHeight
  float: left

.extension__image
  width: 90px
  height: auto

.extension__info
  padding: 1.5rem 1.5rem 1.5rem 0
  width: calc(100% - #{$extensionHeight})
  height: $extensionHeight
  float: left
  text-align: left
  overflow: hidden

.extension__name
  font-weight: bold
  font-size: 1.3em
  margin-bottom: 0.4rem
</style>