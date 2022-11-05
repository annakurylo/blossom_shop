<template>
    <div class="v-cart_item">
        <img class="v-cart-item__image" :src="imgLink" :alt="img">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{$filters.toFix( cart_item_data.price)}}</p>
            <p>{{cart_item_data.article}}</p>
        </div> 
        
        <div class="v-cart-item_quantity">
            <p>Qty</p>
            <span
                @click="decrementItem" 
                class="v-cart-item_quantity__crement"
            >-</span>
            {{cart_item_data.quantity}}
            <span
                @click="incrementItem" 
                class="v-cart-item_quantity__crement"
            >+</span>
        </div>
        <button 
        @click = "deleteFromCart"
        >Delete</button>
    </div>
</template>

<script>
    export default{
        name: 'v-cart-item',
        components: {
            
        },
        props:{
            cart_item_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return{
            }
        },
        computed: {
            imgLink: function () {
                const fileName = this.cart_item_data.image;
                return require(`../../assets/images/${fileName}`);
            }
        },
        mounted(){
            /*const cartItemData = this.cart_item_data;
            cartItemData.quantity = 1*/
            
        },
        methods:{
            deleteFromCart(){
                this.$emit('deleteFromCart')
            },
            decrementItem(){
                this.$emit('decrement')
            },
            incrementItem(){
                this.$emit('increment')
            }
        }
}
</script>

<style lang="scss">
    @import '@/assets/styles/variables.scss';
    .v-cart_item{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        padding: $padding*2;
        margin-bottom: 16px;
        box-shadow: 0 0 8px 0 #e0e0e0;
        background-color: white;
    }
    .v-cart-item__image{
        max-width: 50px;
    }
    .v-cart-item_quantity__crement{
        padding: 8px 16px;
        background: #FF13A7;
        color: white;
        border: 0;
        border-radius: 4px;
        cursor: pointer;
        margin: 16px;
    }

</style>