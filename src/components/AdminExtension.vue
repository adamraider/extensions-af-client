<template lang="pug">
  .extension()
    .main
      label.switch
        input(type="checkbox", :checked="extension.published", @change="update($event, 'published')")
        .switch__box
      .imageWrapper: img.image(:src="extension.image")
      .info: .name {{ extension.name }}
      .moreBtn(@click="toggleExtended()")
          span.icon-keyboard_arrow_up(v-if="extended")
          span.icon-keyboard_arrow_down(v-else)
    .more(:class="{ 'more--active': extended}")
      .options
        span Featured&nbsp;
        label.slider
          input(type="checkbox", :checked="extension.featured", @change="update($event, 'featured')")
          .slider__btn
        span Trending&nbsp;
        label.slider
          input(type="checkbox", :checked="extension.trending", @change="update($event, 'trending')")
          .slider__btn
        //- a(href="javascript:;", style="margin-left: auto;") Destroy
      .desc(v-if="extension.desc") {{ extension.desc }}
</template>

<script>
import Extension from './Extension'

export default {
  components: { Extension },
  props: {
    extension: {
      required: true
    }
  },
  data () {
    return {
      extended: false
    }
  },
  methods: {
    toggleExtended () {
      this.extended = !this.extended
    },

    update (event, field) {
      let value
      console.log(event)

      // gets value of field
      switch (event.target.type) {
        case 'checkbox':
          value = event.target.checked
          break
        default:
          value = event.target.value
          break
      }
      console.log(`updating ${field} with value of ${value}`)

      // updates a cloned obj with new value
      let clone = JSON.parse(JSON.stringify(this.extension))
      clone[field] = value

      // saves to api
      this.$store.dispatch('updateExtension', {
        extension: clone
      }).then(res => {
        console.log('updated', res)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.extension
  background-color: #fff
  width: 100%
  border-radius: 10px
  position: relative
  padding: 1.5em
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.12)
  &::after
    content: ''
    clear: both
    display: block
  &:not(:last-child)
    margin-bottom: 1.6em

.main
  display: flex
  align-items: center
  width: 100%

.more
  overflow: hidden
  font-size: 1rem
  max-height: 0px
  transition: max-height 0.5s

.more--active
  max-height: 200px

.options
  display: flex
  margin-top: 1rem
  margin-bottom: 1rem
  font-size: 1.2em
  label
    margin-right: 1rem
  &:last-child
    margin-bottom: 0 !important

.moreBtn
  margin-left: auto
  vertical-align: middle
  display: inline-block
  font-size: 2em
  color: #969696

.imageWrapper
  width: 3em
  height: 3em
  margin-right: 1em
  overflow: hidden
  img
    width: 100%

.name
  font-size: 1.5rem
  font-weight: bold
  font-style: italic

$switchSize: 3em
.switch
  position: relative
  display: inline-block
  width: $switchSize
  height: $switchSize
  margin-right: 2.5em
  input
    display: none
  input:checked + .switch__box
    background: linear-gradient(135deg, #ffb948, #ff45ad, #a723ff)
    border: none
  input:focus + .switch__box
    box-shadow: 0 0 1px #2196F3
  .switch__box
    width: $switchSize
    height: $switchSize
    border: 2px solid #d6d6d6
    background: #efefef
    transition: background 0.1s
  border-radius: .5em

$sliderSize: 1.2em
.slider
  position: relative
  display: inline-block
  width: $sliderSize * 1.6
  height: $sliderSize
  border-radius: $sliderSize
  background-color: #eaeaea
  input
    display: none
  .slider__btn
    position: absolute
    top: 0
    left: 0
    width: $sliderSize
    height: $sliderSize
    background-color: #a0a0a0
    border-radius: $sliderSize
    border: 2px solid #eaeaea
    transition: left 0.1s
  input:checked + .slider__btn
    left: ($sliderSize * 1.6) - $sliderSize
    background: linear-gradient(135deg, #ffb948, #ff45ad, #a723ff)
  input:focus + .slider__btn
    box-shadow: 0 0 1px #2196F3

</style>