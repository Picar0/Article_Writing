import Vue from "vue";
import VueRouter from "vue-router";
import Credential from "../views/auth/Credential.vue";
import NewArticle from "../views/NewArticle.vue";
import Dashboard from "../components/Dashboard.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/new-article",
        name: "NewArticle",
        component: NewArticle,
        beforeEnter: (to, _, next) => {
          if (!localStorage.getItem("token")) {
            if (to.path !== "/credential") {
              next("/credential");
            }
          }
          next();
        },
      },
    ],
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/credential",
    name: "Credential",
    component: Credential,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// router.beforeEach((to, _, next) => {
//   if (!localStorage.getItem("token")) {
//     if (to.path !== "/credential") {
//       next("/credential");
//     }
//   }
//   next();
// });

export default router;
