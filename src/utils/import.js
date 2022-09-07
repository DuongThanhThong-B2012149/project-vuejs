import { defineAsyncComponent } from "vue";
export const registerGlbalComponent = (app) => {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/authLayout"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/defaultLayout"))
  );
};
