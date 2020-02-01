<template lang="pug">
.column.is-paddingless
  label.base-calendar__label {{ label }}
  input.base-input(type="date" v-model="value")
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

<style lang="sass">
.base-calendar__label
  color: white
  font-size: 14px
</style>
