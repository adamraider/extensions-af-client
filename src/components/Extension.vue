<template lang="pug">
  .extension(:class="{ 'extension--featured': extension.featured }")
    .trending(v-if="extension.trending") 🔥
    a.rocket(:href="extension.url" target="_blank") 🚀&nbsp; Visit
    .extension__imageWrapper
      img.extension__image(:src="extension.img || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEb0lEQVR42u3dO47TQADGcZ8k2T0AJ4ALcII9AT0SJ6DLopW2pIKSBlFSIFEiUdAh0UCFqKgCgmSzLKzJZ2EpeO152I7nkf8njYSWJIjMzzPjeXiLghBCCCGEEEIIIYQQQgghhBBCCCGkkeXZ8Xy9mH1aLeYlZbqi71zffXAAq9P5kgoJVLbffXgAVETQErQV+Hl6dJ9KCFtUBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAYQK4eHq33Dw7+a+sz28BIGcAmxf3yt8fX5XXm+9lV/58/VD+enOeJAYAdFX89uq+/val9ImQCAIAEgdw9e5JOSRqEVJpDQDQrPz3z8sxIgQASAyA7cpXE3/58kG5fny7usL1Z9PYQJ8HgEQAqM83Vv52PNDWrOtnJgTCAoAEANgGfALS9V4N/FJtBQDw71bP2J9/ftu79Yh9LAAAh4Gf+voh3QcAIgdg6sNd+nEARApAFXf5+mE1hWt6jW3kb/t3TGMAAAQAoJH57i2dqR+2Xb22/t9lAAmAiQFo7t51FK/+fV8DQNcWBAATjOi7KtLWfJsAVHMAlqtfGAEwIQDTiL5tND8EgMu0se0OAgAj/4dUYabmuDmb1xeAreuoZw+ZCp4YQFv/b5qY6QNAdxYuMc0eAmBPAFwqR013HwBqPWzAUloIyhKAbXFmt2I1B+ACQJ+p17l8bhMYAALcBro20XU/bbuN8wk7giKZCRxrY4cPpBT6/IOaClZL4HsF96n42G/1DnoxSP38PloDjQ1SrviDWw2st3BVW7w9d/vWYwG9t94SxsGQDJaD1WfbWodqh6+lwrXaqMGfWoXdoltB00okACLYDzBoLWALwzTzuLseEOs2cQAMmAr2GWDGelYAAH2mgh3WAVKZIAKAJwD16UNuLWMbEwDAE4Ca8iGJbY0AAB4AbK9N8cgYABwBmBaZ6kkhFZcWAgAJAmh7XX1W0GeXMQASBNB19Xct/qS0UQQADgDalpf1s67PBEBmAJprB7at4gDICEBb02+7lwdARgD6zOYBIGMALkvBAMgUgOspHwBkCsC14gCQIQCfUz4AyBCAzyIOADIE4LOMC4DMAPge8hwKoH64xRRbyQDgAMB3DX8IgOYm1X0/XwAADgD00IkxAbStI+hKb9tgCoAIAIz91DH9fT2mqA+odr1n3+MFANgWg3rs4HHZKj7mxBMA9gigzx6+MbaOtT3NBAABAJjW/fs+ezCm3cMAsADo2wcPOZA65aHTgwdge5hE34Og1ajecwv57uAQAIF/UUT1wAfP2782BM7PFNq2GCGOjgGgcVq4+lVwIx//rk8h39hatm0hhC/kcXMAHHgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGDsXCxmd6iEsGV5djwvQma1mF1REaHK7KoInR+Pjk5AEKby9d0XsUR9EWW6UhBCCCGEEEIIIYQQQgghhBBCCCHd+QsYKRtu2eUF5QAAAABJRU5ErkJggg=='")
    .extension__info
      .extension__name {{ extension.name }}
      .extension__desc {{ extension.desc || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' }}
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
  padding: 0.3em 1em
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
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.12)
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
  width: $extensionHeight
  height: $extensionHeight
  float: left

.extension__image
  width: 90px
  height: auto

.extension__info
  padding: 1.5em 1.5em 1.5em 0
  width: calc(100% - #{$extensionHeight})
  float: left
  text-align: left
  overflow: hidden

.extension__name
  font-weight: bold
  font-size: 1.3em
  margin-bottom: 0.4em
</style>