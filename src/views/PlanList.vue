<template lang="pug">
.plan-list
  .columns
    .column.is-half.is-offset-one-quarter
      h1 Plan List
      PlanCard(v-for="plan in plans" :key="plan.id" :plan="plan")
</template>

<script>
import PlanCard from "@/components/PlanCard.vue";
import ClientService from "@/services/ClientService.js";

export default {
  data() {
    return {
      plans: []
    };
  },
  components: {
    PlanCard
  },
  created() {
    ClientService.getPlans()
      .then(response => {
        this.plans = response.data;
      })
      .catch(error => {
        console.log("There was an error: " + error.response);
      });
  }
};
</script>

<style lang="sass">
.plan-list
  padding-top: 70px
  min-height: 83vh

  &__link
    color: #004085
</style>
