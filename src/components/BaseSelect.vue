<template lang="pug">
.column.is-paddingless
  select.base-input(@change="updateValue" v-bind="$attrs")
    option {{ label }}
    option(
      v-for="option in options"
      :key="option.value"
      :value="option.name"
      :selected="option.name === null") {{ option.name }}
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String]
    },
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateValue(event) {
      this.value = event.target.value;
    }
  }
};
</script>

<style lang="sass">
.select-input
  width: 220px
</style>
