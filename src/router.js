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
      path: '/educacion',
      name: 'educacion',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "educacion" */ './views/educacionView.vue')
    },
    {
      path: '/formacion',
      name: 'formacion',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "formación" */ './views/formacionView.vue')
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
      component: () => import(/* webpackChunkName: "datosPersonalesView" */ './views/datosPersonalesView.vue')
    }
  ]
})
