<template>
  <div class="v-main-wrapper">
    <v-navigation></v-navigation>
    <!-- <v-header></v-header> важливе-->
    <!-- <v-main-header></v-main-header> -->
    <div class="v-main-wrapper__container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <!-- <v-catalog></v-catalog>
        <v-cart 
            v-if="CART.length"
            :cart_data = "CART"
        ></v-cart> -->
  </div>
</template>

<script>
/*import vCatalog from './v-catalog'
    import vCart from './v-cart'
    import { mapGetters } from 'vuex'*/
//import vHeader from './layouts/v-header.vue'
//import vMainHeader from './layouts/v-main-header.vue'

import vNavigation from "../components/layouts/v-navigation.vue";


export default {
  name: "v-main-wrapper",
  components: {
    //vHeader
    //vMainHeader
    vNavigation,

    //vCatalog,
    //vCart
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    /*             ...mapGetters([
                'CART'
            ]) */
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.v-main-wrapper {
  /*max-width: 1400px;
        margin: 0 auto;*/

  &__container {
    margin-top: $header-height;
    //padding: 50px 20px 50px 20px;
  }
}
</style>
