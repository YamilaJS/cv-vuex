import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'perfil',
      component: () => import(/* webpackChunkName: "perfil" */ './views/perfilView.vue')
    },
    {
      path: '/educación',
      name: 'educación',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "educación" */ './views/educaciónView.vue')
    },
    {
      path: '/formación',
      name: 'formación',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "formación" */ './views/formaciónView.vue')
    },
    {
      path: '/experiencia',
      name: 'experiencia',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "experiencia" */ './views/experienciaView.vue')
    },
    {
      path: '/datos',
      name: 'datos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "datosView" */ './views/datosView.vue')
    }
  ]
})
