<template lang="pug">
  .content(v-show="!$store.state.loading")
    new-extension-form
</template>

<script>
import NewExtensionForm from './NewExtensionForm'

export default {
  components: { NewExtensionForm }
}
</script>