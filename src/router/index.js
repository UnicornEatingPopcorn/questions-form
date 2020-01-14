import Vue from "vue";
import VueRouter from "vue-router";
import PlanCreate from "../views/PlanCreate.vue";
import PlanEdit from "../views/PlanEdit.vue";
import PlanList from "../views/PlanList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "plan-create",
    component: PlanCreate
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/plan-edit",
    name: "plan-edit",
    component: PlanEdit
  },
  {
    path: "/plan-list",
    name: "plan-list",
    component: PlanList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
