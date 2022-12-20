<template>
  <!-- CSS only -->
  <div class="v-login">
    <h1 class="v-login__title">Log in</h1>
    <form id="form" class="form_body" @submit.prevent="formSubmit">
      <div class="form_item">
        <input
          v-model="logData.number"
          id="formNumber"
          placeholder="Number"
          type="text"
          class="form_input"
          name="number"
        />
      </div>
      <div class="form_item">
        <input
          v-model="logData.password"
          id="formPassword"
          placeholder="Password"
          type="password"
          class="form_input"
          name="password"
        />
      </div>
      <!-- <div class="form_item">
                  <input id="formEmail" placeholder="E-mail" type="text" class="form_input _req _email" name="email">
              </div>
              <div class="form_item">
                  <input id="formStreet" placeholder="Вулиця" type="text" class="form_input _req _id" name="street">
              </div>
              <div class="form_item">
                  <input id="formHouse" placeholder="Будинок" type="text" class="form_input _req _id" name="house">
              </div> -->
      <button @click="logUser" type="button" class="form_button">Log in</button>
      <div class="registration">
        <div class="isAccount">No account?</div>
        <router-link :to="{ name: 'autorization' }">
          <div><button class="btn">Registration</button></div>
        </router-link>
      </div>
      <!-- <div class="notification" v-if="errorMessage">
        {{ errorMessage }}
      </div> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  el: "#form",
  name: "v-login",
  components: {},
  props: {},
  data() {
    return {
      logData: {
        number: "",
        password: "",
      },
      //errorMessage: "",
    };
  },
  methods: {
    ...mapMutations(["LOGIN_USER"]),
    async logUser() {
      //this.errorMessage = "";
      const result = await axios.post("/login", this.logData);
      console.log(result);
      if (result.data.status === "fail" && result.data.message) {
        alert(result.data.message);
      } else {
        const userId = result.data.status;
        this.LOGIN_USER(userId);

        this.logData = {
          number: "",
          password: "",
        };

        alert("User was log in");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.v-login {
  padding: 50px 20px 50px 20px;

  &__title {
    font-size: 32px;
    color: #ff13a7;
    font-weight: 700;
    font-family: Snell Roundhand, cursive;
    margin-bottom: 40px;
  }
  .logout {
    margin-top: 40px;
  }
  .registration {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      padding: 0 10px;
    }
  }
  .notification {
    margin-top: 40px;
    color: #000000;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
  .form_body {
    max-width: 700px;
    margin: 0 auto;
  }
  .form_item {
    margin: 0 0px 20px 0px;
    width: 100%;
  }
  .form_input {
    font-size: 16px;
    height: 50px;
    padding: 0 20px;
    width: 100%;
    border-radius: 5px;
    transition: all 0.5s ease 0s;
  }
  .form_input:focus {
    box-shadow: 0 0 15px #ff13a7;
  }
  .form_button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    min-height: 60px;
    font-size: 18px;
    border-radius: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: #ff13a7;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 5px 0 #161b13;
    transition: background-color 0.5s ease 0s;
    position: relative;
    top: 0;
  }
  .form_button:hover {
    background-color: #ff13a7;
  }
  .form_button:active {
    top: 3px;
    box-shadow: 0 2px #161b13;
  }
  input:focus {
    background-position: 0 0;
  }
}
</style>
