import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header/header'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/goods',
      name: Goods,
      component: Goods
    },
    {
      path: '/ratings',
      name: Ratings,
      component: Ratings
    },
    {
      path: '/seller',
      name: Seller,
      component: Seller
    }
  ],
  mode: 'history'
})

// import Vue from 'vue'
// import Router from 'vue-router'
// import goods from 'components/goods/goods'
// import ratings from 'components/ratings/ratings'
// import seller from 'components/seller/seller'
//
// Vue.use(Router)
//
// const routes = [{
//   path: '/',
//   redirect: '/goods'
// }, {
//   path: '/goods',
//   component: goods
// }, {
//   path: '/ratings',
//   component: ratings
// }, {
//   path: '/seller',
//   component: seller
// }];
//
// export default new Router({
//   linkActiveClass: 'active',
//   routes
// })
