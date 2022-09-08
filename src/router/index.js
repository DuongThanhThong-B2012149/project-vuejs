import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: import(/* webpackChunkName: "home" */ "../views/indexView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/registerView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/registerView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
