<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <div class="d-flex mx-auto justify-center align-center ma-1">
           <v-toolbar-title class="font" >WrtArt</v-toolbar-title>          
        </div>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav class="mt-3">
        <v-list-item :to="item.to" v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary" elevate-on-scroll >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <text-animation title="WrtArt"></text-animation>
      <v-spacer></v-spacer>
      <v-btn v-if="token" outlined width="90" @click="logout">Logout</v-btn>
    </v-app-bar>

    <v-main class="main-bg">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TextAnimation from "./TextAnimation.vue";
export default {
  components: {  TextAnimation },
  data: () => ({
    token: localStorage.getItem('token'),
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "New Article", icon: "mdi-post", to: "/new-article" },
      { title: "Credential", icon: "mdi-login", to: "/credential" },
    ],

    drawer: false,
  }),
  methods: {
     logout() {
      localStorage.clear();
      this.$router.push("/credential");
    },
  }
};
</script>

<style scoped>
.font{
  /* font-family: 'Signika Negative', sans-serif; */
  font-family:  cursive;
}


</style>



