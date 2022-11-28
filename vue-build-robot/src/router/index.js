import { createRouter, createWebHistory } from "vue-router";

import PartInformation from "../components/RobotBuilder/PartInformation.vue";
import CartView from "../views/CartView.vue";
import HomeView from "../views/HomeView.vue";
import RobotBuilderView from "../views/RobotBuilderView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/build",
      name: "robot-builder",
      component: RobotBuilderView,
    },
    {
      path: "/part-info/:partType/:id",
      name: "part-information",
      component: PartInformation,
      beforeEnter(to, from, next) {
        const isIdValid = Number.isInteger(Number(to.params.id));
        next(isIdValid);
      },
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
  ],
});

export default router;
