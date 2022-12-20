<template>
  <div class="v-catalog-item">
    <v-popup
      v-if="arePopupVisible"
      @closePopup="closeInfoPopup"
      rightBtnTitle="Add to Cart"
      :popupTitle="product_data.name"
      @rightBtnAction="rightBtnAction"
    >
      <!-- <img class="v-catalog-item__image" :src="imgLink" :alt="img" /> -->
      <img class="v-catalog-item__image" :src="imgLink" :alt="img" />
      <div class="item">
        <p class="v-catalog-item__name">{{ product_data.name }}</p>
        <p class="v-catalog-item__price">{{ $filters.toFix( product_data.price) }}</p>
        <p class="v-catalog-item__price">{{ product_data.category.category }}</p>
      </div>
    </v-popup>

    <!-- <img class="v-catalog-item__image" :src="imgLink" :alt="img" /> -->
    <img class="v-catalog-item__image" :src="imgLink" :alt="img" />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ $filters.toFix( product_data.price) }}</p>
    <div class="btnItem">
      <button class="v-catalog-item__show-info btn" @click="showPopupInfo">
        Show info
      </button>
      <button class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import vPopup from "../v-popup.vue";

export default {
  name: "v-catalog-item",
  components: {
    vPopup,
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      arePopupVisible: false,
    };
  },
  computed: {
    // imgLink: function () {
    //   const fileName = this.product_data.image;
    //   return require(`../../assets/images/${fileName}`);
    // },
    imgLink: function () {
      const fileName = this.product_data.image;
      return require(`../../../server/static/${fileName}`)
      //return require(`../../../server/static/${fileName}`);
    },
    toFix() {
      return (value) => {
        value = parseFloat(value);
        return value.toFixed(2);
      }
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    showPopupInfo() {
      this.arePopupVisible = true;
    },
    closeInfoPopup() {
      this.arePopupVisible = false;
    },
    rightBtnAction() {
      this.addToCart();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/styles.scss";

.v-catalog-item {
  background-color: white;
  flex-basis: 25%;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  box-shadow: 0 0 8px 0 #e0e0e0;
  &__image {
    width: 250px;
    height: 330px;
  }
  .btnItem {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .v-catalog-item__show-info {
    background: #000000;
  }
}
</style>
