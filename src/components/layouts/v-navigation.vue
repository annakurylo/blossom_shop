<template>
  <div class="v-navigation">
    <div class="v-navigation__top">
      <div class="container">
        <div class="navigation">
          <router-link :to="{ name: 'vMainHeader' }">
            <img src="../../assets/images/logotype.jpg" alt="" />
          </router-link>
          <div class="navigation_elements">
            <router-link :to="{ name: 'vMainHeader' }">
              <a href="">Home</a>
            </router-link>
            <!-- <a href="">About</a> -->
            <router-link :to="{ name: 'catalog' }">
              <a href="">Catalog</a>
            </router-link>
            <!-- <a href="">Catalog</a> -->
            <router-link :to="{ name: 'cart' }">
              <a href="">Basket</a>
            </router-link>
            <!-- <a href="">Contacts</a> -->
            <router-link :to="{ name: 'autorization' }">
              <a href="">Registration</a>
            </router-link>
            <router-link :to="{ name: 'login' }">
              <a href="">Log in</a>
            </router-link>
              <a href="" @click="logout">Log out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "v-navigation",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["LOGOUT"]),
    logout() {
      this.LOGOUT;
      alert("The user is logged out of the account")
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.v-navigation {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 25;
  height: 0px;
  height: $header-height;

  .container {
    margin: 0 auto; /*по центру*/
    padding: 0 50px;
    //border: 1px solid rgb(1, 1, 1);
  }
  &__top {
    //padding: 20px 0;
    background-color: #000000;
    height: 100%;

    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 150px;
      }
      .navigation_elements {
        display: flex;
        font-family: Snell Roundhand, cursive;

        a:not(:last-child) {
          margin-right: 20px;
        }
        a:hover {
          color: #ff13a7;
        }
        a {
          color: rgb(255, 255, 255);
          font-weight: 500;
          text-decoration: none;
          //font-style: italic;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
