<template lang="pug">
.loader
  .loader__figure
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
$size: 2rem
$speed: 2s
$color: #fff
.loader
  position: absolute
  top: 42%
  left: 50%
  transform: translate(-50%, -50%)
  font-size: 1rem
  overflow: visible
  padding-top: $size

.loader__figure
  position: relative
  width: $size
  height: $size
  margin: 0 auto
  box-sizing: content-box
  border-width: 0
  border-style: solid
  border-color: $color
  border-radius: 50%
  animation: loader-figure $speed infinite cubic-bezier(0.215, 0.61, 0.355, 1)
  transform-origin: center center 0

.loader__label
  float: left
  margin-left: 50%
  transform: translateX(-50%)
  margin: 2em 0 0 50%
  letter-spacing: 0.1rem
  line-height: 1.5rem
  white-space: nowrap
  animation: loader-label $speed infinite cubic-bezier(0.215, 0.61, 0.355, 1)

@keyframes loader-figure
  0%
    transform: scale(0)
  30%
    transform: scale(1)
    border-width: $size
    opacity: 1
  100%
    transform: scale(1)
    border-width: 0
    opacity: 0

@keyframes loader-label
  0%
    opacity: 0.35
  30%
    opacity: 1
  100%
    opacity: 0.35
</style>