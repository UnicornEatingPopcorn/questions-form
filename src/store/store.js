import Vue from "vue";
import Vuex from "vuex";
import ClientService from "@/services/ClientService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    plans: []
  },
  mutations: {
    ADD_PLAN(state, plan) {
      state.plans.push(plan);
    },
    DELETE_PLAN(state, planId) {
      state.plans = state.plans.filter(plan => planId !== plan.id);
    }
  },
  actions: {
    createPlan({ commit }, plan) {
      ClientService.postPlan(plan);
      commit("ADD_PLAN", plan);
    },
    deletePlan({ commit }, id) {
      ClientService.deletePlan(id).then(() => {
        commit("DELETE_PLAN", id);
      });
    }
  }
});
