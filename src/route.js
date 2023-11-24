import { createRouter, createWebHistory } from "vue-router";
import CountryDataComponent from "./components/CountryDataComponent.vue";
import HomePage from "./components/HomePage.vue";
import NotFound from "./components/NotFound";

const routes = [
  {
    path: "/countries/:name",
    name: "CountryData",
    component: CountryDataComponent,
  },
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
