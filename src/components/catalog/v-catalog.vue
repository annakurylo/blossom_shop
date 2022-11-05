<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart' /*, params: {cart_data: CART}*/ }">
      <div class="v-catalog__link-to-cart">CART: {{ CART.length }}</div>
    </router-link>

    <h1 class="v-catalog__title">Catalog</h1>
    <div class="filtres">
      <div class="select">
        <v-select
          :options="categories"
          @select="sortByCategories"
          :selected="selected"
          :isExpanded="IS_DESKTOP"
        ></v-select>
      </div>
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="10000"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          min="0"
          max="10000"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        />
      </div>
      <div class="result">
        <div>Min: {{ minPrice }}</div>
        <div>Max: {{ maxPrice }}</div>
      </div>
    </div>

    <div class="v-catalog-list">
      <v-catalog-item
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item";
import { mapActions, mapGetters } from "vuex";
import vSelect from "../../components/v-select";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vSelect,
  },
  props: {},
  data() {
    return {
      categories: [
        { name: "Всі", value: "всі" },
        { name: "Світери", value: "світери" },
        { name: "Футболки", value: "футболки" },
      ],
      selected: "Всі",
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
    };
  },
  computed: {
    ...mapGetters([
      "PRODUCTS",
      "CART",
      "IS_MOBILE",
      "IS_DESKTOP",
      "SEARCH_PRODUCT",
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    sortedProductsBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(
        (item) =>
          //console.log(category.name);
          item.price >= vm.minPrice && item.price <= vm.maxPrice
        /*if(item.price>=vm.minPrice && item.price<= vm.maxPrice){
                        vm.sortedProducts.push(item);
                    }*/
      );
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(
          (item) => item.category === category.name
        );
        this.selected = category.name;
      }

      /*this.sortedProducts = [];
                let vm = this;
                this.PRODUCTS.map(function(item){
                    if(item.category === category.name){
                        vm.sortedProducts.push(item);
                    }
                })
                this.selected = category.name*/
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let temp = this.minPrice;
        this.minPrice = this.maxPrice;
        this.maxPrice = temp;
      }
      this.sortByCategories();
    },
  },
  watch: {
    SEARCH_PRODUCT() {
      this.sortedProductsBySearchValue(this.SEARCH_PRODUCT);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("data arrived");
        this.sortByCategories();
        this.sortedProductsBySearchValue(this.SEARCH_PRODUCT);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.v-catalog {
  padding: 50px 20px 50px 20px;

  &__title {
    font-size: 32px;
    color: #ff13a7;
    font-weight: 700;
    font-family: Snell Roundhand, cursive;
  }
  /*max-width: 1400px;
        margin: 0 auto;
        padding-top: 110px;*/
  &-list {
    display: grid;
    grid-template-columns: repeat;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 16px;
  }
  &__link-to-cart {
    position: absolute;
    top: 85px;
    right: 10px;
    padding: $padding * 2;
    box-shadow: 0 0 8px 0 #e0e0e0;
    border: 2px solid #e0e0e0;
    background: #ff13a7;
    color: white;
  }
  .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }
  .range-slider svg,
  .range-slider input[type="range"] {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  input[type="range"]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
  .filtres {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $padding 0;
  }
  .result {
    background: #000000;
    color: white;
    width: 200px;
    overflow: hidden;
  }
  .result div {
    margin: $padding 0;
  }
}
</style>
