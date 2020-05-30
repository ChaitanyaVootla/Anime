import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import anime from '../views/Anime.vue';
import top from '../views/Top.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/anime/:id",
    name: "Anime",
    component: anime
  },
  {
    path: "/",
    name: "Top",
    component: top
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
