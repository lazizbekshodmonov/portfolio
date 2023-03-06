import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import EducaionView from '../views/EducationView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import BlogView from '../views/BlogView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "Home",
      component: HomeView
    },
    {
      path: '/services',
      name: "Services",
      component: ServicesView
    },
    {
      path: '/education',
      name: "Education",
      component: EducaionView
    },
    {
      path: '/portfolio',
      name: "Portfolio",
      component: PortfolioView
    },
    {
      path: '/blog',
      name: "Blog",
      component: BlogView
    },
    {
      path: '/contact',
      name: "Contact",
      component: ContactView
    },

  ]
})

export default router
