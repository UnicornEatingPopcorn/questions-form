<template lang="pug">
div#app
  NavBar
  router-view(:key="$route.fullPath")
  Footer
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="sass">
#app
  width: 100%
  height: 80%
  background-color: #000000e3

h1
  color: #BAE5FE

.error-message
  color: red

.button_margin-top
  margin-top: 20px

.top-margin
  margin-top: 40px
</style>
