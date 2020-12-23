import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import Edit from "../views/Edit";
import Preview from "../views/Preview";
//import Tab1 from "../views/tabs/Tab1";
//import Tab2 from "../views/tabs/Tab2";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
    /*
    children: [
      {
        path: 'tab1',
        name: 'tab1',
        component: Tab1,
      },
      {
        path: 'tab2',
        name: 'tab2',
        component: Tab2,
      }

    ]

     */
  },

  {
    path: '/preview/:id',
    name: 'Preview',
    component: Preview,
    /*
    children: [
      {
        path: 'tab1',
        name: 'tab1',
        component: Tab1,
      },
      {
        path: 'tab2',
        name: 'tab2',
        component: Tab2,
      }

    ]

     */
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
