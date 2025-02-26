import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";
import Recent from "./views/Recent.vue";
import EditEntry from "./views/EditEntry.vue";
import ViewEntry from "./views/ViewEntry.vue";
import MissingPage from "./views/404.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/recent', component: Recent },
  { path: '/entry/edit/:date', component: EditEntry },
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/:username', component: ViewEntry },
  {
    path: '/:username/:date', component: ViewEntry, meta: {
      title: (route) => {
        return `${route.params.username}'s What Got Done for the week of ${route.params.date}`
      },
    }
  },
  { path: '/', component: Home },
  { path: '*', component: MissingPage },
]

export default new VueRouter({
  routes,
  mode: 'history'
})