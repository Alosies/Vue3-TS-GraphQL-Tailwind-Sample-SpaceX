import type { App } from 'vue'
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import LayoutMain from '../components/layout/LayoutMain.vue'
import Error from '../views/Error.vue'
import Home from '../views/Home.vue'
import SpaceX from '../views/SpaceX.vue'
import SpaceXLaunch from '../views/SpaceXLaunch.vue'
import MainRoutesName from './constants'

const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: MainRoutesName.Home,
    props: true,
    component: Home,
  },
  {
    path: '/Explore',
    name: MainRoutesName.Explore,
    props: true,
    component: SpaceX,
  },
  {
    path: '/SpaceXLaunch/:launchId',
    name: MainRoutesName.SPaceXLaunch,
    props: true,
    component: SpaceXLaunch,
  },
]

const routes: RouteRecordRaw[] = [
  {
    path: '/error',
    alias: '/:pathMatch(.*)*',
    name: 'Error',
    props: true,
    component: Error,
  },
  {
    path: '/',
    props: true,
    component: LayoutMain,
    children: mainRoutes,
  },
]

export default function initializeRouter(app: App): Router {
  const router: Router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)

  return router
}
