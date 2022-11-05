import Vuex from 'vuex'
import commonActions from './actions/actions'
import apiRequests from './actions/api-actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const actions = {...commonActions, ...apiRequests}

let store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        isMobile: false,
        isDesktop: true,
        searchProduct: ''
    },
    mutations,
    actions,
    getters
});

export default store;