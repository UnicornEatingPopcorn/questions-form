<template lang="pug">
.column.is-paddingless
  input.base-input(type="text" v-model="value" :placeholder="label")
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String]
    }
  }
};
</script>

<style lang="sass"></style>
