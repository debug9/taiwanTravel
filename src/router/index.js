import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import $ from 'jquery'
import TravelInfo from '@/components/TravelInfo'
import SearchView from '@/components/SearchView'
import ViewDetails from '@/components/ViewDetails'
import FoodRecommendation from '@/components/FoodRecommendation'

Vue.use(Router, axios, $)

export default new Router({
  routes: [
    {
      path: '',
      name: 'TravelInfo',
      component: TravelInfo
    },
    {
      path: '/SearchView',
      name: 'SearchView',
      component: SearchView
    },
    {
      path: '/ViewDetails',
      name: 'ViewDetails',
      component: ViewDetails
    },
    {
      path: '/FoodRecommendation',
      name: 'FoodRecommendation',
      component: FoodRecommendation
    }
  ]
})
