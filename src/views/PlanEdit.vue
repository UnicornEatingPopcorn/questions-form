<template lang="pug">
.container
  .columns
    .column.is-offset-2
      h1.title.top-margin Edit Plan № {{ plan.id}} 
      form#mainQuestions.position-relative.question-plan(@submit.prevent="updatePlan")
      h1.subtitle Check your answers, please
      table.table.plan-edit__table
        tr(v-for="answer in plan.answers" :key="answer.id")
          td.plan-edit__answers {{ answer.question.id}}.
          td.plan-edit__answers {{ answer.question.title }} 
          td
             input.input.is-small(:placeholder="answer.value || 'There is nothing here yet'" v-model="answer.value")
      button.button.btn-plan(@click="editPlan") Submit
</template>

<script>
import ClientService from "@/services/ClientService.js";

export default {
  props: ["id"],
  data() {
    return {
      plan: {}
    };
  },
  created() {
    ClientService.getPlan(this.id)
      .then(response => {
        this.plan = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  },
  methods: {
    editPlan() {
      this.$store
        .dispatch("editPlan", this.plan)
        .then(() => {
          this.$router.push({
            name: "plan-list"
          });
        })
        .catch(() => {
          console.log("There was a problem editing your plan");
        });
    }
  }
};
</script>

<style lang="sass">
.plan-edit
  &__answers
    color: beige

  &__table
    width: 500px

    input::placeholder
      color: gray
    input:focus::placeholder
      color: #36363645
    input
      color: black

.btn:hover
  transform: scale(1.03)
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)

.btn-plan
  background-color: #2aabf7 !important
  margin: 20px 0px
  width: 220px

.form-text
  color: #000000e3
</style>
