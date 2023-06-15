<template>
  <div class="body">
    <div class="glowing">
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
    </div>
    <div class="d-flex justify-center align-center" style="height: 100vh">
      <v-card width="450" height="400" class="pa-7 text-center">
        <v-card-title class="justify-center align-center"
          >Create New Article</v-card-title
        >
        <v-form ref="article">
        <div class="pa-3">
          <v-text-field
            label="Title"
            outlined
            dense
            :rules="titleRules"
            v-model="title"
          ></v-text-field>
          <v-textarea
            label="Content"
            outlined
            dense
            no-resize
            counter
            :rules="contentRules"
            v-model="content"
          ></v-textarea>
        </div>
        <v-btn color="primary " dark style="width: 20%" @click="handleSubmit"
          >Submit</v-btn
        >
         </v-form>
      </v-card>
      <loader :dialog="dialog"></loader>
      <pop-up :error="error" @value="valueChanged"></pop-up>
    </div>
    <div class="glowing">
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
    </div>
  </div>
</template>

<script>
import Loader from "../components/Loader.vue";
import PopUp from "../components/PopUp.vue";
import axios from "axios";
export default {
  components: { PopUp, Loader },
  data: () => ({
    error: false,
    dialog: false,
    title: "",
    titleRules: [(v) => !!v || "Title is required"],
    author: localStorage.getItem('name'),
    content: "",
    contentRules: [(v) => !!v || "this must not be empty"],
    avatar: localStorage.getItem('avatar'),
  }),
  methods: {
    async handleSubmit() {
      if (this.$refs.article.validate()) {
        this.dialog = true;
        await axios
          .post("/articles", {
            title: this.title,
            author: this.author,
            content: this.content,
            avatar: this.avatar,
          })
          .then((res) => {
            // console.log(res);
            if (res.data.status === 202) {
              localStorage.getItem("token", res.data.token);
              this.dialog = false;
            } else if (res.data.status !== 202) {
              this.dialog = false;
              this.error = true;
            }
          });
      }
    },
    valueChanged(value) {
      this.error = value;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #1e2022;
  overflow: hidden;
}
.glowing {
  position: relative;
  width: 750px;
  height: 750px;
  margin: -150px;
  transform-origin: right;
  animation: colorChange 5s linear infinite;
}
@keyframes colorChange {
  0% {
    filter: hue-rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
    transform: rotate(360deg);
  }
}
.glowing:nth-child(even) {
  transform-origin: left;
}
.glowing span {
  position: absolute;
  top: calc(80px * var(--i));
  left: calc(80px * var(--i));
  bottom: calc(80px * var(--i));
  right: calc(80px * var(--i));
}
.glowing span:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -8px;
  width: 15px;
  height: 15px;
  background: #f00;
  border-radius: 50%;
}
.glowing span:nth-child(3n + 1):before {
  background: rgba(134, 255, 0, 1);
  box-shadow: 0 0 20px rgba(134, 255, 0, 1), 0 0 40px rgba(134, 255, 0, 1),
    0 0 60px rgba(134, 255, 0, 1), 0 0 80px rgba(134, 255, 0, 1),
    0 0 0 8px rgba(134, 255, 0, 0.1);
}
.glowing span:nth-child(3n + 2):before {
  background: rgba(255, 214, 0, 1);
  box-shadow: 0 0 20px rgba(255, 214, 0, 1), 0 0 40px rgba(255, 214, 0, 1),
    0 0 60px rgba(255, 214, 0, 1), 0 0 80px rgba(255, 214, 0, 1),
    0 0 0 8px rgba(255, 214, 0, 0.1);
}
.glowing span:nth-child(3n + 3):before {
  background: rgba(0, 226, 255, 1);
  box-shadow: 0 0 20px rgba(0, 226, 255, 1), 0 0 40px rgba(0, 226, 255, 1),
    0 0 60px rgba(0, 226, 255, 1), 0 0 80px rgba(0, 226, 255, 1),
    0 0 0 8px rgba(0, 226, 255, 0.1);
}
.glowing span:nth-child(3n + 1) {
  animation: animate 10s alternate infinite;
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.glowing span:nth-child(3n + 2) {
  animation: animate-reverse 3s alternate infinite;
}
@keyframes animate-reverse {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.glowing span:nth-child(3n + 3) {
  animation: animate-reverse 8s alternate infinite;
}
</style>
