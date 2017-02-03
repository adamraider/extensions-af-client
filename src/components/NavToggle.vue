<template lang="pug">
.navToggle(@click="toggle()" v-bind:class="{ active: active }")
  span
  span
  span
</template>

<script>
export default {
  props: {
    active: Boolean,
    default: false
  },
  methods: {
    toggle () {
      if (this.active) {
        this.$emit('close')
      } else {
        this.$emit('open')
      }
    }
  },
  computed: {
    toggleVar () {
      return this.active
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>
$button-width: 30px
$button-height: $button-width
$bar-thickness: 1px
$bar-spacing: 7px
$button-transition-duration: 0.1s
$line-color: #fff
.navToggle
  position: relative
  overflow: hidden
  margin: 0
  padding: 0
  width: $button-width
  height: $button-height
  font-size: 0
  text-indent: -9999px
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  box-shadow: none
  border-radius: 0
  border: none
  cursor: pointer
  opacity: 1
.navToggle span
  display: block
  height: $bar-thickness
  background-color: $line-color
  position: absolute
  left: 0
  width: 100%
  transition: all 0.2s
  &:nth-of-type(1)
    top: ($button-width / 2) - $bar-spacing
  &:nth-of-type(2)
    top: 50%
  &:nth-of-type(3)
    top: ($button-width / 2) + $bar-spacing
.navToggle.active span
  &:nth-of-type(1)
    top: 50%
    transform: rotate(-45deg)
  &:nth-of-type(2)
    opacity: 0
  &:nth-of-type(3)
    top: 50%
    transform: rotate(45deg)
</style>