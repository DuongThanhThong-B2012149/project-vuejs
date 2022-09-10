import { auth } from "@/configs/firebase";
import { createRouter, createWebHistory } from "vue-router";

// Auth Guards
const requireAuth = (to, from, next) => {
  console.log({ to, from, next });
  const user = auth.currentUser;
  // console.log("Before enter router: ", user);
  if (!user) next({ name: "Login", params: {} });
  else next();
};
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      text: "Profile",
      leading: true,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/indexView.vue"),
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
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/profileView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogoutView.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BudgetView.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReportView.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "NewTransaction",
      leading: false,
      isShowFooter: false,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewTransaction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
