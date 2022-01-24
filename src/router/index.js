import { createRouter, createWebHistory } from "vue-router";
import PostListLeagues from "../pages/PostListLeagues.vue";
import PostListCommands from "../pages/PostListCommands.vue";
import LeagueCalendarForm from "../pages/LeagueCalendarForm.vue";
import TeamCalendarForm from "../pages/TeamCalendarForm.vue";

const routes = [
  {
    path: "/",
    component: PostListLeagues,
    meta: {
      style_page: {
        background: "rgba(255, 254, 251, 0.8)",
      },
    },
  },
  {
    path: "/teams",
    meta: {
      style_page: {
        background: "#E5E5E5",
      },
    },
    component: PostListCommands,
  },
  {
    path: "/league_calendar",
    meta: {
      style_page: {
        background: "#E55",
      },
    },
    component: LeagueCalendarForm,
    // children: [
    //   {
    //     path: "user",
    //     name: "UserTest",
    //     component: () => import("../pages/UserTest.vue"),
    //   },
    // ],
  },
  {
    path: "/team_calendar",
    meta: {
      style_page: {
        background: "#E5E5E5",
      },
    },
    component: TeamCalendarForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
