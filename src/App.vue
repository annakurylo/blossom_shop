<template>
  <div id="app">
    <!-- <v-main-header></v-main-header> -->

    <v-main-wrapper></v-main-wrapper>
  </div>
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper";
import { mapActions, mapGetters } from "vuex";
//import vMainHeader from './components/layouts/v-main-header'

export default {
  name: "App",
  components: {
    vMainWrapper,
    //vMainHeader
  },
  computed: {
    ...mapGetters(["IS_MOBILE", "IS_DESKTOP"]),
  },
  methods: {
    ...mapActions(["SET_MOBILE", "SET_DESKTOP"]),
  },
  mounted() {
    let vm = this;
    window.addEventListener("resize", function () {
      if (window.innerWidth > 767) {
        console.log("d");
        vm.SET_DESKTOP();
      } else {
        console.log("m");
        vm.SET_MOBILE();
      }
    });
  },
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 110px;*/
  height:100%;

  //background-color: #d8d2c022;
}
</style>
