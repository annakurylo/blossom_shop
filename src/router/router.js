import { createRouter, createWebHistory } from 'vue-router';
import vCart from '../components/cart/v-cart'
import vCatalog from '../components/catalog/v-catalog'
import vMainHeader from '../components/v-main-header'
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
    ]
})
export default router;