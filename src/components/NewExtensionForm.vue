<template lang="pug">
  .newExtensionForm
    .done(v-if="done")
      h1.heading 👍 Thanks for your submission
    template(v-else)
      h1.heading(v-if="heading") Submit an extension
      .error(v-if="error") Uh oh, there was an error: {{ error }}
      form.form(@submit.prevent="validateBeforeSubmit")
        .inputs
          .field
            label(v-if="labels") Your Email
            input(type="email"
                  name="email"
                  v-model="extension.email"
                  placeholder="elon@tesla.com"
                  v-validate="'required|email'")
            .field__error {{ errors.first('email') }}
          .field
            label(v-if="labels") Name of Extension
            input(type="text"
                  name="name"
                  v-model="extension.name"
                  placeholder="Netflix Parrot"
                 v-validate="'required'")
          .field__error {{ errors.first('name') }}
          .field
            label(v-if="labels") URL or Website
            input(type="text"
                  name="url"
                  v-model="extension.url"
                  placeholder="https://extensions.af"
                  v-validate="'required|url'")
            .field__error {{ errors.first('url') }}
          .field
            label(v-if="labels") Image
            input(type="file"
                  ref="file"
                  name="image"
                  @change="updateFile"
                  placeholder="Extension image (200x200)"
                  required)
            .field__error {{ errors.first('image') }}
          .field
            label(v-if="labels") Description
            textarea(placeholder="Describe your extension in 140 characters" 
                     name="desc"
                     v-model="extension.desc" 
                     rows="3"
                     v-validate="'required|max:140'")
            .field__error {{ errors.first('desc') }}
        button.submit(type="submit") Submit a dope af extension
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
        email: '',
        name: '',
        desc: '',
        url: ''
      }
    }
  },
  methods: {
    createExtension () {
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
          email: '',
          name: '',
          url: '',
          desc: ''
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
    },

    validateBeforeSubmit (e) {
      e.preventDefault()
      this.$validator.validateAll().then(() => {
        this.createExtension()
      }).catch(() => {

      })
    }
  }
}
</script>

<style lang="sass">
.form
  label 
    font-weight: bold
    color: #000

  .field
    &:not(:last-child)
      margin-bottom: .43em

  .field__error
    color: #fff
    font-weight: bold
    font-size: 0.9rem

  input, textarea
    font-family: inherit
    font-weight: bold
    font-style: italic
    border: none
    outline: none
    border-radius: 5px
    font-size: 1rem
    color: #fff
    padding: 0.4em 1em
    margin: 0
    background-color: #281427
    width: 100%
    max-height: 0
    overflow: hidden
    transition: max-height 0.5s
    max-height: 300px
    &::-webkit-input-placeholder
       color: #f1c6e3

    &:-moz-placeholder /* Firefox 18- */
       color: #f1c6e3

    &::-moz-placeholder  /* Firefox 19+ */
       color: #f1c6e3

    &:-ms-input-placeholder  
       color: #f1c6e3

.inputs
  position: relative
  margin-bottom: 2px
  &::after
    content: ''
    display: block
    margin: 0 auto
    clear: both
    position: relative
    top: -6px
    left: 0
    right: 0
    width: 0
    height: 0
    border-left: 8px solid transparent
    border-right: 8px solid transparent
    border-top: 10px solid #281427

.error
  font-weight: bold
  color: #fff
  margin-bottom: 1rem

.submit
  border-radius: 2em
  background-color: #000
  box-shadow: 0 0 30px 0 rgba(189, 43, 235, 0.5)
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