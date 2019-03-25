import Vue from 'vue'
import VueRouter from 'vue-router'


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[{
        path: '/home', component: Foo
    },{
        path: '/about', component: Bar
    },{
        path:'*',redirect:'/home'
    }]
  })
export default router