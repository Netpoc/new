import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

routes: [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Home Page - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        {
          property: 'og:description',
          content: 'The Official Website of Oxford Commercial.'
        }
      ]
    },

  },
  {
    path: '/Csr',
    name: 'Csr',
    meta: {
      title: 'CRS - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'description',
          content: 'The Official Website of Oxford Commercial.',
        },
        {
          property: 'og:description',
          content: 'The Official Website of Oxford Commercial.'
        }
      ]
    },
    component: () => import('@/views/Csr.vue')
  },
  {
    path: '/OurEstates',
    name: 'OurEstates',
    meta: {
      title: 'Estates - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'Our Estates',
          content: 'Real Estate Sales, Investment',
        },
        {
          property: 'og:description',
          content: 'The Official Website of Oxford Commercial.'
        }
      ]
    },
    component: () => import('@/views/ourEstate')
  },
  {
    path: '/Services',
    name: 'Services',
    meta: {
      title: 'Our Services - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'Our Services',
          content: 'Products and Services',
        },
        {
          property: 'og:description',
          content: 'The Official Website of Oxford Commercial.'
        }
      ]
    },
    component: () => import('@/views/Services')
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: () => import('@/views/Blog')
  },
  {
    path: '/Contact',
    name: 'Contact',
    meta: {
      title: 'Contact Us - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'description',
          content: 'The Official Website of Oxford Commercial.',
        },
      ]
    },
    component: () => import('@/views/Contact')
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    meta: {
      title: 'Contact Us - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'description',
          content: 'The Official Website of Oxford Commercial.',
        },
      ]
    },
    component: () => import('@/views/Gallery')
  },
  {
    path: '/News',
    name: 'News',
    meta: {
      title: 'News and Updates - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'description',
          content: 'Real Estate News',
        },
      ]
    },
    component: () => import('@/views/News')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About Us - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'description',
          content: 'The Official Website of Oxford Commercial.',
        },
      ]
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/Investment',
    name: 'Investment',
    meta: {
      title: 'Investments - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'description',
          content: 'Investments',
        },
      ]
    },
    component: () => import('@/views/Investment')
  },
  {
    path: '/Capital',
    name: 'Capital',
    meta: {
      title: 'Oxford Capital - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'description',
          content: 'Investments',
        },
      ]
    },
    component: () => import('@/views/Capital')
  },
  {
    path: '/Kiddies',
    name: 'Kiddies',
    meta: {
      title: 'Oxford Kiddies Heritage - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'description',
          content: 'Future investment for children',
        },
      ]
    },
    component: () => import('@/views/Kiddies')
  },
  {
    path: '/landTrade',
    name: 'landTrade',
    meta: {
      title: 'Oxford Land Trade - Oxford Commercial Service Int Ltd',
      metaTags:[
        {
          name: 'description',
          content: 'Land trading',
        },
      ]
    },
    component: () => import('@/views/landTrade')
  },
],


})



