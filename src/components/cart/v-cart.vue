<template>
  <div class="container">
    <div class="v-cart">
      <router-link :to="{ name: 'catalog' }">
        <div class="v-cart__link-to-catalog">Back to Catalog</div>
      </router-link>
      <div class="v-cart_text">
        <div class="title">Корзина</div>
        <div class="info" v-if="!CART.length">Cart is empty...</div>
      </div>
      <div class="v-cart_list">
        <v-cart-item
          v-for="(item, index) in CART"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
        />
      </div>
      <div class="applyOrder" v-if="CART.length">
        <button class="btn" @click="applyOrder">Order</button>
      </div>
      <div class="v-cart__total">
        <p class="total-name">Cost:</p>
        <p class="total-cost">{{ cartTotalCost }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapActions, mapGetters, mapState } from "vuex";
import axios from 'axios';
export default {
  name: "v-cart",
  components: { vCartItem },
  props: {
    cart_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
        orderData: {

        }
    };
  },
  computed: {
    ...mapGetters(["CART"]),
    ...mapState(['userId']),
    cartTotalCost() {
      let result = [];
      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else return 0;
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    async applyOrder() {
        // this.CART.map((item) => {
        //     console.log(item._id)
        // })
        
        console.log(this.userId)
        if(!this.userId){
            return alert('Sign in to your account')
        }
        await Promise.all(this.CART.map(async(item) => {
            const result = await axios.post("/order", {userId: this.userId, goodId: item._id, quantity: item.quantity});
            console.log(result);
            
        }))
        alert('Order accepted')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.container {
}
.v-cart {
  padding: 50px 20px 50px 20px;
  /*div:not(:last-child) {
            margin-bottom: 20px;
          }*/
  &_text {
    margin-bottom: 20px;
    .title {
      font-size: 32px;
      color: #ff13a7;
      font-weight: 700;
      font-family: Snell Roundhand, cursive;
    }
    .info {
      margin-top: 20px;
    }
  }
  .v-cart_list {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
  }
  .applyOrder {
    margin: 20px 0 100px 0;
  }

  /*-width: 1400px;
        margin: 0 auto;*/
  //padding-top: 110px;
  //margin-top: $header-height;
  //padding: 50px 20px 50px 20px;
  &__link-to-catalog {
    position: absolute;
    top: 85px;
    right: 10px;
    padding: 16px;
    box-shadow: 0 0 8px 0 #e0e0e0;
    border: 2px solid #e0e0e0;
    background: #ff13a7;
    color: white;
  }
  &__total {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 32px;
    display: flex;
    justify-content: center;
    color: white;
    background-color: #000000;
    .total-name {
      margin-right: 16px;
    }
  }
}
</style>
