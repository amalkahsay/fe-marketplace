import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import MainNavbar from '@/components/layout/MainNavbar.vue'
import MainFooter from '@/components/layout/MainFooter.vue'

import MyAssets from '../views/my-assets/MyAssets.vue'
import MyAsset from '../views/my-assets/MyAsset.vue'
import AssetSaleData from '../views/my-assets/AssetSaleData.vue'

import Homepage from '../views/Homepage.vue'
import AssetDetails from '../views/AssetDetails.vue'
import Marketplace from '../views/Marketplace.vue'
import Community from '../views/Community.vue'
import Collections from '../views/Collections.vue'
import Creators from '../views/Creators.vue'
import FourOFour from '../views/FourOFour.vue'
import GetInTouch from '../views/GetInTouch.vue'
import Post from '../views/Post.vue'
import AboutUs from '../views/AboutUs.vue'
import Help from '../views/Help.vue'
import Search from '../views/Search.vue'
import Applications from '../views/Applications.vue'

import Account from '../views/Account.vue'
import Wallet from '../views/Wallet.vue'
import ApplicationAdministration from '../views/projects/ApplicationAdministration.vue'
import MyApplications from '../views/projects/MyApplications.vue'
import MyApplication from '../views/projects/MyApplication.vue'
import UpdateApplication from '../views/projects/UpdateApplication.vue'
import CustomiseContract from '../views/projects/CustomiseContract.vue'
import DeployContract from '../views/projects/DeployContract.vue'
import SystemSettings from '../views/projects/SystemSettings.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'homepage',
    components: { default: Homepage, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/applications',
    name: 'applications',
    components: { default: Applications, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/community',
    name: 'community',
    components: { default: Community, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    components: { default: AboutUs, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/search',
    name: 'search',
    components: { default: Search, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/help',
    name: 'help',
    components: { default: Help, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/collections',
    name: 'collections',
    components: { default: Collections, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/creators',
    name: 'creators',
    components: { default: Creators, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/admin-app',
    name: 'admin-app',
    components: { default: ApplicationAdministration, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/account',
    name: 'account',
    components: { default: Account, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/wallet',
    name: 'wallet',
    components: { default: Wallet, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/my-app-settings',
    name: 'my-app-settings',
    components: { default: SystemSettings, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/my-apps',
    name: 'my-apps',
    components: { default: MyApplications, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/my-app/:projectId',
    name: 'my-app',
    components: { default: MyApplication, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/connect-app',
    name: 'connect-app-create',
    components: { default: UpdateApplication, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/connect-app/:projectId',
    name: 'connect-app-edit',
    components: { default: UpdateApplication, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/customise-contract/:projectId',
    name: 'customise-app-contract',
    components: { default: CustomiseContract, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/upload-contract/:projectId',
    name: 'upload-app-contract',
    components: { default: DeployContract, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/assets/:assetHash',
    name: 'asset-details',
    components: { default: AssetDetails, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/favourites',
    name: 'favourites',
    components: { default: MyAssets, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/my-assets',
    name: 'my-assets',
    components: { default: MyAssets, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/my-assets/:assetHash',
    name: 'my-asset',
    components: { default: MyAsset }
  },
  {
    path: '/asset-sale-data/:assetHash',
    name: 'asset-sale-data',
    components: { default: AssetSaleData }
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    components: { default: Marketplace, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/marketplace1',
    name: 'marketplace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Marketplace.vue')
  },
  {
    path: '/get-in-touch',
    name: 'get-in-touch',
    components: { default: GetInTouch, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/:uid',
    name: 'post',
    components: { default: Post, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/404',
    name: '404',
    components: { default: FourOFour, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '*',
    redirect: { path: '/404' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
