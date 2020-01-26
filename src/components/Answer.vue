<template lang="pug">
.column.is-6
  component(
    :is="question.component"
    :label="question.title"
    :options="question.select_options"
    v-model="answer.value")
</template>

<script>
import AirportSelect from "@/components/AirportSelect.vue";
import BaseCalendar from "@/components/BaseCalendar.vue";
import BaseSelect from "@/components/BaseSelect.vue";

export default {
  props: {
    answer: Object
  },
  computed: {
    question() {
      return this.answer.question;
    }
  },
  components: {
    AirportSelect,
    BaseCalendar,
    BaseSelect
  }
};
</script>

<style lang="sass">
.top
  margin-top: 10px
</style>
