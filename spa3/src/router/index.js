import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '../components/Accueil'
import Resultats from "../components/Resultats.vue"
import Contact from "../components/Contact.vue"
import Photos from "../components/Photos.vue"
import Information from "../components/Information.vue"
import Mentions from "../components/Mentions.vue"
import PhotosClic from "../components/PhotosClic.vue";

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0
    };
  },
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/photosclic',
      name: 'PhotosClic',
      component: PhotosClic
    },
    {
      path: '/mentions',
      name: 'Mentions',
      component: Mentions
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/resultats',
      name: 'Resultats',
      component: Resultats
    }
  ]
})
