import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/homepage/HomePage'
import Partitions from '../components/partitions/Partitions'
import Dynamic from '../components/dynamic/Dynamic'
import Message from '../components/message/Message'

Vue.use(Router)

let router = new Router({
  routes: [
    {path: '/homepage', name: 'HomePage', component: HomePage},
    {path: '/partitions', name: 'Partitions', component: Partitions},
    {path: '/dynamic', name: 'Dynamic', component: Dynamic},
    {path: '/message', name: 'Message', component: Message}
  ],
  linkActiveClass: 'active'
})
router.push('/homepage')
export default router
