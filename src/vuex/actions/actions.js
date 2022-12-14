export default {
    GET_SEARCH_PRODUCT_TO_VUEX({commit}, value){
        commit('SET_SEARCH_PRODUCT_TO_VUEX',value)
    },
    ADD_TO_CART({commit}, product){
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index){
        commit('REMOVE_FROM_CART', index)
    },
    INCREMENT_CART_ITEM({commit}, index){
        commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index){
        commit('DECREMENT', index)
    },
    SET_MOBILE({commit}){
        commit('SWITCH_MOBILE')
    },
    SET_DESKTOP({commit}){
        commit('SWITCH_DESKTOP')
    }

}