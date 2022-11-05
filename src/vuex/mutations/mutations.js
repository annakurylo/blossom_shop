export default {
    SET_SEARCH_PRODUCT_TO_VUEX: (state, value) => {
        state.searchProduct = value
    },
    SET_PRODUCTS_IN_STATE: (state, products) => {
        state.products = products;
    },
    SET_CART: (state, product) => {
        if(state.cart.length){
            let isProductExist = false;
            state.cart.map(function (item){
                console.log(item.quantity)
                if(item.article === product.article){
                    isProductExist = true;
                    item.quantity++;
                    console.log(item.quantity)
                }
            });
            if(!isProductExist){
                state.cart.push(product);
            }
            
        }else{
            state.cart.push(product);
        }
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index,1)
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
        if(state.cart[index].quantity>1){
            state.cart[index].quantity--
        }
    },
    SWITCH_DESKTOP: (state) => {
        state.isDesktop = true;
        state.isMobile = false;
        
    },
    SWITCH_MOBILE: (state) => {
        state.isDesktop = false;
        state.isMobile = true;
    }
}