import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/comics",
    name: "comics",
    component: () => import("../views/Comics.vue"),
  },
  {
    path: "/comic/:id",
    name: "comics-detail",
    component: () => import("../views/DetailItem.vue"),
  },
  {
    path: "/personajes",
    name: "characters",
    component: () => import("../views/Characters.vue"),
  },
  {
    path: "/eventos",
    name: "events",
    component: () => import("../views/Events.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
