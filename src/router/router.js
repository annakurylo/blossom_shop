import { createRouter, createWebHistory } from 'vue-router';
import vCart from '../components/cart/v-cart'
import vCatalog from '../components/catalog/v-catalog'
import vMainHeader from '../components/v-main-header'
import vAutorization from '../components/autorisation/v-autorization'
import vLogin from '../components/autorisation/v-login'
//import vMainPage from '../components/main_page/v-main-page'

let router = new createRouter({
    history: createWebHistory(),
    routes: [
       /* {
            path: '/',
            name: 'mainPage',
            component: vMainPage
        },*/
        {
            path: '/catalog',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        },
        {
            path: '/',
            name: 'vMainHeader',
            component: vMainHeader
        },
        {
            path: '/autorization',
            name: 'autorization',
            component: vAutorization,
            props: true
        },
        {
            path: '/login',
            name: 'login',
            component: vLogin,
            props: true
        }
    ]
})
export default router;