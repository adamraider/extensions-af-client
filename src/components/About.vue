<template lang="pug">
  .content.about(v-show="!$store.state.loading")
    h1.heading extensions af, bro. As not year featured in...

    img.press-logos(src="/static/press_logos.png")

    p Let’s be real, the Chrome Extension Store is not dope AF. So, I created EXTENSIONS.AF - a site to find the dopest extensions out there. When an extension works like it should, you feel a sensation of magic. 

    img(src="http://i.giphy.com/12NUbkX6p4xOO4.gif")

    p Have any questions? Add me on Snapchat!

    img(src="/static/snap.png" width="200px")
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.heading
  color: #000

h1
  margin-bottom: 1rem

.press-logos
  width: 100%
  max-width: 400px

img
  margin-bottom: 2rem  

.about
  font-weight: bold
  font-size: 1.1em
  line-height: 1.45
  color: #000
  @media(min-width: 800px)
    margin-top: 4.7em
</style>