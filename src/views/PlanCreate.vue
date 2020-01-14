<template lang="pug">
.create-plan-page
  .columns
    .column.is-5.is-offset-1
      form#mainQuestions.create-plan-page__question-plan
        p.create-plan-page__title Let's start with few simple questions
        .create-plan-page__line
        .columns.is-multiline
          .column.is-6(v-for="question in questions" :key="question.id")
            input.base-input(:placeholder="question.inquiry" v-model="question.value")
        .columns
          .column.create-plan-page__button
            button.button.is-black Submit
    .column.is-4.is-offset-1
      .create-plan-page__question-plan
        p.create-plan-page__title Additional questions
        .create-plan-page__line
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { id: 1, inquiry: "From", value: "" },
        { is: 2, inquiry: "To", value: "" },
        { id: 3, inquiry: "Seats", value: "" },
        { id: 4, inquiry: "Which way", value: "" },
        { id: 5, inquiry: "When to go", value: "" },
        { is: 6, inquiry: "Return date", value: "" },
        { is: 7, inquiry: "Expenses", value: "" },
        { is: 8, inquiry: "Roadbook", value: "" },
        { id: 9, inquiry: "Arrival time", value: "" },
        { is: 10, inquiry: "Return time", value: "" },
        { is: 11, inquiry: "Max transfers", value: "" },
        { is: 12, inquiry: "Max flight time", value: "" }
      ]
    };
  }
  // computed: {
  //   questions() {
  //     return this.$store.getters["questions/questions"];
  //   }
  // }
};
</script>

<style lang="sass">
.create-plan-page
  display: flex
  justify-content: center
  align-items: center
  height: calc(100vh - 120px)

  &__title
    font-size: 18px
    color: white
    display: flex
    justify-content: center

  &__line
    width: 100%
    height: 1px
    background: #f7b944
    display: inline-block

  &__button
    display: flex !important
    justify-content: center

  &__question-plan
    background-color: #495057
    border-radius: 4px
    padding: 30px 40px

.button:hover
  transform: scale(1.03)
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)

.base-input
   background-color: #495057 !important
   color: #dbdbdb !important
   border-inline-start: 0px !important
   border-block-end: 1px solid black !important
   border-block-start: 0px !important
   border-inline-end: 0px !important
   width: 100%
   font-size: 15px
</style>
