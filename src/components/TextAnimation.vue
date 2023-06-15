<template>
  <div class="body">
    <slot>
      <h2 data-text="WrtArt">{{ title }}</h2>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
  
 *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: cursive;
    }
.body{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
h2 {
  position: relative;
  font-size: 2vw;
  color: #252839;
  /* -webkit-text-stroke: 0.3vw #383d52; */
  text-transform: uppercase;
}
h2::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: #fff;
  -webkit-text-stroke: 0vw #383d52;
  border-right: 2px solid "#Fc510D";
  overflow: hidden;
  animation: animate 4s linear;
  animation-fill-mode: forwards;
}
@keyframes animate {
  from{
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
