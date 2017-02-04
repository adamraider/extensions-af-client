<template lang="pug">
  .content(v-show="!$store.state.loading")
    .heading extensions af, bro
    .about Loem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.heading
  color: #000
  
.about
  font-weight: bold
  font-size: 1.1em
  line-height: 1.45
  color: #000
</style>