import { createApp } from "vue";
import router from "@/router/router";
import App from "./App.vue";
import components from "@/components";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount("#app");
