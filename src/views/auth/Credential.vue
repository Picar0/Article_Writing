<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1 class="text-center display-2 text--accent-3">
                        Log In
                      </h1>
                      <h4 class="text-center mlt-4">
                        Ensure your email for registration
                      </h4>
                      <v-form ref="login">
                        <v-text-field
                          label="Email"
                          name="Email"
                          prepend-icon="mdi-email"
                          v-model="email1"
                          :rules="emailRules"
                        >
                        </v-text-field>
                        <v-text-field
                          label="Password"
                          name="Password"
                          prepend-icon="mdi-lock"
                          type="password"
                          v-model="password1"
                          :rules="passwordRules"
                        >
                        </v-text-field>
                        <div
                          class="text-center d-flex justify-center align-center mt-2 pa-3"
                        >
                          <v-btn
                            rounded
                            color="primary"
                            dark
                            @click="handleLogin"
                            >Log In</v-btn
                          >
                          <v-btn
                            class="ml-3"
                            rounded
                            color="primary"
                            dark
                            @click="home"
                            >home</v-btn
                          >
                        </div>
                      </v-form>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="4" class="color">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text--center display-1">Hello, Friends !</h1>
                      <h5 class="text-center">
                        Enter your personal details and start journey with us
                      </h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step++"
                        >Register</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col cols="12" md="4" class="color">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Welcome Back !</h1>
                      <h5 class="text-center">
                        To Keep being connected with us please login with your
                        personal info
                      </h5>
                    </v-card-text>
                    <div class="text-center mt-2 pa-3">
                      <v-btn rounded outlined dark @click="step--">Login</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1 class="text-center display-2 text--accent-3">
                        Register
                      </h1>
                      <h4 class="text-center mlt-4">
                        Ensure your email for registration
                      </h4>
                      <v-form ref="register">
                        <v-text-field
                          label="Name"
                          name="Name"
                          prepend-icon="mdi-account"
                          v-model="name"
                          :rules="nameRules"
                        >
                        </v-text-field>
                        <v-text-field
                          label="Email"
                          name="Email"
                          prepend-icon="mdi-email"
                          v-model="email2"
                          :rules="emailRules"
                        >
                        </v-text-field>
                        <v-text-field
                          label="Password"
                          name="Password"
                          prepend-icon="mdi-lock"
                          type="password"
                          v-model="password2"
                          :rules="passwordRules"
                        >
                        </v-text-field>
                        <div
                          class="text-center d-flex d-flex justify-center align-center mt-2 pa-3"
                        >
                          <v-btn
                            rounded
                            color="primary"
                            dark
                            @click="handleRegister"
                            >Register</v-btn
                          >
                          <v-btn
                            class="ml-3"
                            rounded
                            color="primary"
                            dark
                            @click="home"
                            >Home</v-btn
                          >
                        </div>
                      </v-form>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <loader :dialog="dialog"></loader>
    <pop-up :error="error" @value="valueChanged"></pop-up>
  </v-main>
</template>

<script>
import Loader from "../../components/Loader.vue";
import PopUp from "../../components/PopUp.vue";
import axios from "axios";
export default {
  components: { PopUp, Loader },
  data: () => ({
    error: false,
    dialog: false,
    step: 1,
    email1: "",
    email2: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    password1: "",
    password2: "",
    passwordRules: [(v) => !!v || "Password is required"],
    name: "",
    nameRules: [(v) => !!v || "User name is required"],
  }),
  props: {
    source: String,
  },
  methods: {
     handleLogin() {
      if (this.$refs.login.validate()) {
        this.dialog = true;
         axios
          .post("/login", {
            email: this.email1,
            password: this.password1,
          })
          .then((res) => {
            if (res.data.status === 202) {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("avatar", res.data["user-info"].avatar);
              localStorage.setItem("name", res.data["user-info"].name);
              this.dialog = false;
              this.$router.push("/");
            } else if (res.data.status !== 202) {
              this.dialog = false;
              this.error = true;
            }
          });
      }
    },
     handleRegister() {
      if (this.$refs.register.validate()) {
        this.dialog = true;
         axios
          .post("/register", {
            name: this.name,
            email: this.email2,
            password: this.password2,
          })
          .then((res) => {
            if (res.data.status === 202) {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("avatar", res.data["user-info"].avatar);
              localStorage.setItem("name", res.data["user-info"].name);
              this.dialog = false;
            }
          });
      }
    },
    valueChanged(value) {
      this.error = value;
    },
    home() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.color {
  background-color: #393e46;
}
</style>
