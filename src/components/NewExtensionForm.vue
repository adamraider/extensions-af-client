<template lang="pug">
  .newExtensionForm
    .done(v-if="done")
      h1.heading 👍 Thanks for your submission
    template(v-else)
      h1.heading(v-if="heading") Submit an extension
      .error(v-if="error") Uh oh, there was an error: {{ error }}
      form.form(@submit.prevent="createExtension")
        label(v-if="labels") Your Email
        input(type="email"
              v-model="extension.email"
              placeholder="elon@tesla.com"
              required)
        label(v-if="labels") Name of Extension
        input(type="text"
              v-model="extension.name"
              placeholder="Netflix Parrot"
              required)
        label(v-if="labels") URL or Website
        input(type="url"
              v-model="extension.url"
              placeholder="https://extensions.af"
              required)
        label(v-if="labels") Image
        input(type="file"
              ref="file"
              @change="updateFile"
              placeholder="Extension image (200x200)"
              required)
        label(v-if="labels") Description
        textarea(placeholder="Describe your extension in 140 characters" v-model="extension.desc" rows="3")
        button.submit(type="submit") Submit An Extension
</template>

<script>
import api from '../api'
import FormData from 'form-data'

export default {
  props: {
    heading: {
      default: true
    },
    labels: {
      default: true
    }
  },
  data () {
    return {
      done: false,
      error: null,
      extension: {
        email: null,
        name: null,
        desc: null,
        url: null
      }
    }
  },
  methods: {
    createExtension (e) {
      let self = this
      let data = new FormData(this.extension)
      data.append('extension[name]', this.extension.name)
      data.append('extension[url]', this.extension.url)
      data.append('extension[desc]', this.extension.desc)
      data.append('extension[image]', this.extension.image)
      data.append('extension[email]', this.extension.email)

      console.log('submitting ext', data)
      api.createExtension(data).then(res => {
        console.log('Extension created', res)
        self.extension = {
          email: null,
          name: null,
          url: null,
          desc: null
        }
        self.done = true
        self.error = null
      }).catch(res => {
        console.log('Error creating extension', res)
        self.error = res.body.error
      })
    },

    updateFile (e) {
      let file = e.target.files[0] || e.dataTransfer.files[0] || e.target.result
      this.$set(this.extension, 'image', file)
    }
  }
}
</script>

<style lang="sass">
.form
  label 
    font-weight: bold
    color: #fff

  input, textarea
    font-family: inherit
    font-weight: bold
    font-style: italic
    border: none
    outline: none
    border-radius: 10px
    font-size: 1rem
    color: #fff
    padding: 0.4em 1em
    margin-bottom: .43em
    background-color: #281427
    width: 100%
    max-height: 0
    overflow: hidden
    transition: max-height 0.5s
    max-height: 300px
    &::-webkit-input-placeholder
       color: #fff

    &:-moz-placeholder /* Firefox 18- */
       color: #fff 

    &::-moz-placeholder  /* Firefox 19+ */
       color: #fff 

    &:-ms-input-placeholder  
       color: #fff

.error
  font-weight: bold
  color: #fff
  margin-bottom: 1rem

.submit
  border-radius: 2em
  background: linear-gradient(135deg, #ffb948, #ff45ad, #a723ff)
  box-shadow: 0 0 20px rgba(0,0,0,.1)
  outline: none
  border: none
  color: #fff
  padding: 0.5em 1em
  width: 100%
  font-size: 1.2rem
  font-family: inherit
  font-weight: bold
  font-style: italic
  margin-bottom: 1.5em
  &:hover
    cursor: pointer
</style>