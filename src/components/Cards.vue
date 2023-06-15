<template>
  <div class="body">
    <div class="container">
      <div class="box" style="border: 5px solid black; background: linear-gradient(315deg, #ff0057, #e64a19);">
        <div class="content">
          <h2>01</h2>
          <h3>{{data[0].title}}</h3>
          <p>
            {{data[0].title}}
          </p>
          <a href="">Read More</a>
        </div>
      </div>
      <div class="box" style="border: 5px solid black">
        <div class="content">
          <h2>02</h2>
          <!-- <h3>{{data[4].title}}</h3> -->
          <p>
            <!-- {{data[4].title}} -->
          </p>
          <a href="">Read More</a>
        </div>
      </div>
      <div class="box" style="border: 5px solid black; background: linear-gradient(315deg, #391e63, #5d02ff);">
        <div class="content">
          <h2>03</h2>
          <h3>Service Three</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <a href="">Read More</a>
        </div>
      </div>
      <div class="box" style="border: 5px solid black; background: linear-gradient(315deg, #ff0000, #ffc107);">
        <div class="content">
          <h2>04</h2>
          <h3>Service Four</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.articleData();
  },
  data: () => ({
    data: [],
  }),
  methods: {
     articleData() {
      axios.get("/articles").then((res) => {
       
        this.data = res.data.articles;
        console.log(this.data)
      });
    },

  }
}
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
}
.container {
  position: relative;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-template-rows: auto;
  grid-gap: 30px 40px;
}
.container .box {
  position: relative;
  height: 400px;
  background: #060c21;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
}
.container .box::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #fff;
  transform: skew(2deg, 2deg);
  z-index: -1;
}
.container .box:nth-child(1)::before {
  background: linear-gradient(315deg, #ff0057, #e64a19) !important;
}
.container .box:nth-child(2)::before {
  background: linear-gradient(315deg, #89ff00, #00bcd4) !important;
}
.container .box:nth-child(3)::before {
  background: linear-gradient(315deg, #391e63, #5d02ff) !important;
}
.container .box:nth-child(4)::before {
  background: linear-gradient(315deg, #ff0000, #ffc107) !important;
}
.container .box::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
}
.content {
  position: relative;
  padding: 20px;
  transform: translateY(40px);
}
.box .content h2 {
  position: absolute;
  top: -60px;
  right: 20px;
  margin: 0;
  padding: 0;
  font-size: 10em;
  color: rgba(255, 255, 255, 0.05);
  transition: 0.5s;
}
.box:hover .content h2 {
  top: -140px;
}
.box .content h3 {
  margin: 0 0 10px;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
}
.box .content p {
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 16px;
}
.box .content a {
  position: relative;
  margin: 20px 0 0;
  padding: 10px 20px;
  text-decoration: none;
  border: 1px solid #fff;
  display: inline-block;
  color: #fff;
  transition: 0.5s;
  transform: translateY(-40px);
  opacity: 0;
  visibility: hidden;
}
.box:hover .content a {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
.box .content a:hover {
  color: #000;
  background: #fff;
}
</style>
