import Vue from 'vue'
import Router from 'vue-router'
import Bar from '../pages/bar'
import Foo from '../pages/foo'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      name: "bar",
      path: "/bar/:id/:name",
      component: Bar
    },
    {
      path: "/foo",
      component: Foo
    }

  ]
})
