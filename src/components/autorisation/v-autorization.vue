<template>
  <!-- CSS only -->
  <div class="v-autorization">
    <h1 class="v-autorization__title">Registration</h1>
    <form id="form" class="form_body" @submit.prevent="formSubmit" >
      <div class="form_item">
        <input
          v-model="regData.surname"
          id="formName"
          placeholder="Surname"
          type="text"
          class="form_input"
          name="surname"
        />
      </div>
      <div class="form_item">
        <input
          v-model="regData.name"
          id="formSurame"
          placeholder="Name"
          type="text"
          class="form_input"
          name="name"
        />
      </div>
      <div class="form_item">
        <input
          v-model="regData.number"
          id="formNumber"
          placeholder="Number"
          type="text"
          class="form_input"
          name="number"
        />
      </div>
      <div class="form_item">
        <input
          v-model="regData.street"
          id="formStreet"
          placeholder="Street"
          type="text"
          class="form_input _req _id"
          name="street"
        />
      </div>
      <div class="form_item">
        <input
         v-model="regData.house"
          id="formHouse"
          placeholder="House"
          type="text"
          class="form_input _req _id"
          name="house"
        />
      </div>
      <div class="form_item">
        <input
          v-model="regData.password"
          id="formPassword"
          placeholder="Password"
          type="password"
          class="form_input"
          name="password"
        />
      </div>
      <button @click="regUser" type="button" class="form_button">Submit</button>
      <div class="login">
        <div class="isAccount">Have an account?</div>
        <router-link :to="{ name: 'login' }">
          <div><button class="btn">Log in</button></div>
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
export default {
  el: "#form",
  name: "v-autorization",
  components: {},
  props: {},
  data() {
    return {
      regData: {
        surname: "",
        name: "",
        number: "",
        password: "",
        street: "",
        house: ""
      },
      //errorMessage: "",
    };
  },
  methods: {
    async regUser() {
      //this.errorMessage = "";
      const result = await axios.post("/registration", this.regData);
      if (result.data.status === "fail" && result.data.message) {
        alert(result.data.message);
      } else {
        this.regData = {
          surname: "",
          name: "",
          number: "",
          street: "",
          house: "",
          password: ""
        };

        alert("User was registrated");
      }
      //console.log(result === 'error');
      //result.status === 'error'
      /*if(result.status) {
                    this.errorMessage = true;
                }*/
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.v-autorization {
  padding: 50px 20px 50px 20px;

  &__title {
    font-size: 32px;
    color: #ff13a7;
    font-weight: 700;
    font-family: Snell Roundhand, cursive;
    margin-bottom: 40px;
  }
  .login {
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
