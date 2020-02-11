<template lang="pug">
.purple-content
  .columns.justify-content-center
    .column.is-6.is-offset-2
      h1.top-margin Plan № {{ id }}
      form.question-plan
        h3 Answers:        
        h5(v-for="answer in plan.answers" :key="answer.id") {{ answer.question.id}}. {{ answer.question.title }} : {{ answer.value || "empty" }}
      .columns.button_margin-top
        .column
          router-link.button.is-warning(:to="{ name: 'plan-edit', params: { id: plan.id } }") Edit
        .column
          button.button.is-info.btn__text-white Submit
        .column
          button.button.is-danger.btn__text-white(@click="deletePlan") Delete
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
    deletePlan() {
      this.$store.dispatch("deletePlan", this.id).then(() => {
        this.$router.push({
          name: "plan-list"
        });
      });
    }
  }
};
</script>

<style lang="sass">
.btn__text-white
  color: white !important

.question-plan
  color: white
</style>
