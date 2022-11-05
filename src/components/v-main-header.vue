<template>
  <div class="v-main-header">
    <div class="content">
      <v-navigation></v-navigation>
      <div class="v-main-header__head">
        <!-- <div class="container">
          <div class="head_row">
            <div class="head_title">
                //bloom <br> with grace. 
            </div>
          </div>
        </div> -->
      </div>
      <div class="v-main-header__about">
        <div class="container">
          <div class="about_wrapper">
            <div class="about_image">
              <img src="../assets/images/header.png" alt="" />
            </div>
            <div class="about_info">
              <div class="about_info_title">About us</div>
              <div class="about_info_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eos
                adipisci dolores dignissimos doloribus aperiam? Aspernatur
                distinctio amet minima impedit similique? Deleniti eos, odio
                quam magnam quaerat voluptate blanditiis natus.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="v-main-header__catalog">
        <div class="catalog_wrapper">
          <div class="catalog_left">
            <div class="catalog_info">
              <div class="catalog_title">Catalog</div>
              <div class="catalog_text">
                What does, your choice in clothes say about you!
              </div>
              <router-link :to="{ name: 'catalog' }">
                <button class="btn_to_catalog btn">to Catalog</button>
              </router-link>
            </div>
          </div>
          <div class="catalog_right"></div>
        </div>
      </div>
    </div>
    <div class="v-main-header__footer">
      <div class="container">
        <div class="footer_wrapper">
          <div class="footer_top">
            <div class="footer_text">Contact with us</div>
            <div class="footer_social_networks">
              <div class="footer_icon_image">
                <img src="../assets/images/instagram.png" alt="" />
              </div>
              <div class="footer_icon_image">
                <img src="../assets/images/telegram.png" alt="" />
              </div>
              <div class="footer_icon_image">
                <img src="../assets/images/facebook.png" alt="" />
              </div>
            </div>
            <div class="footer_number">+00(123) 456-78-09</div>
            <div class="footer_bottom">
              © COPYRIGHT 2014 - ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vNavigation from "../components/layouts/v-navigation.vue";
export default {
  name: "v-main-header",
  components: {
    vNavigation,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/styles.scss";

.v-main-header {
  //background-color: #d8d2c044;
  font-family: Helvetica, sans-serif;
  min-height: 100vh;
  overflow: hidden;
  display: flex; /*для всіє сторінки технологія флекс*/
  flex-direction: column;

  .content {
    flex: 1 1 auto;
  }

  .container {
    margin: 0 auto; /*по центру*/
    padding: 0 50px;
    //border: 1px solid rgb(1, 1, 1);
  }

  &__head {
    background: url("../assets/images/head2.jpg") no-repeat;
    //background-size: 100%;
    background-size: cover;
    height: 700px;
    //background-color: rgb(94, 186, 155);
   /* .head_row {
      //display: flex;
      //justify-content: center;
      // margin-left: 250px;
      //align-items: center;
      //height: 800px;
    }
    .head_title {
      margin: 150px 0px 0 200px;
      font-size: 36px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #000000;
      //font-style: italic;
      font-family: Snell Roundhand, cursive;
      font-weight: 700;
      line-height: 48px;
      /*background-color: #FF13A7;
                padding: 5px 20px;
                border-radius: 16px;*/
    //}
  }

  &__about {
    margin: 50px 0;
    .about_wrapper {
      padding: 20px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 400px;
      }
    }
    .about_info {
      display: flex;
      flex-direction: column;
      div:not(:last-child) {
        margin-bottom: 20px;
      }
      .about_info_title {
        font-size: 32px;
        color: #ff13a7;
        //font-style: italic;
        font-weight: 700;
        font-family: Snell Roundhand, cursive;
      }
      .about_info_text {
        max-width: 700px;
        font-size: 16px;
        font-family: Helvetica, sans-serif;
        line-height: 24px;
      }
    }
  }

  &__catalog {
    .catalog_wrapper {
      .catalog_left {
        background-color: #000000;
        width: 50%;
        height: 450px;
        float: left;
        .catalog_info {
          height: 450px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .catalog_title {
            font-size: 32px;
            color: #ff13a7;
            font-weight: 700;
            font-family: Snell Roundhand, cursive;
            margin-bottom: 24px;
          }
          .catalog_text {
            color: #ffffff;
            margin-bottom: 16px;
          }
          .btn_to_catalog {
          }
        }
      }
      .catalog_right {
        width: 50%;
        height: 450px;
        float: right;
        background: url(../assets/images/catalog.jpg);
        background-position: 100% 0;
        background-size: 50vw 100%;
        background-repeat: no-repeat;
      }
    }
  }

  &__footer {
    background: #000000;
    margin-top: 100px;
    padding: 25px 0;

    .footer_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      .footer_top {
        display: flex;
        //justify-content: center;
        align-items: center;
        flex-direction: column;
        
          .footer_text {
            font-size: 32px;
            color:#ff13a7;
            font-weight: 700;
            font-family: Snell Roundhand, cursive;
          }
        }
          .footer_social_networks {
            margin-top: 20px;
            display: flex;
            div:not(:last-child) {
              margin-right: 20px;
            }
            .footer_icon_image {
              img {
                width: 50px;
              }
            }
          }
          .footer_number {
            margin-top: 10px;
            font-size: 20px;
            color: #ffffff;
            font-weight: 700;
            font-family: Snell Roundhand, cursive;
          }
          .footer_bottom {
            margin-top: 20px;
            font-size: 14px;
            color: #ff13a7;
          }
        }
      }
    }
</style>
