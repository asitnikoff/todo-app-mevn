import MainPage from "@/pages/MainPage.vue";
import TaskPage from "@/pages/TaskPage.vue";
import TaskDetailPage from "@/pages/TaskDetailPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/tasks",
    component: TaskPage,
  },
  {
    path: "/tasks/:id",
    component: TaskDetailPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
