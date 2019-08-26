<template>
  <div id="app">   
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Utils/Navigation'
  export default {
    name: 'my-wallet',
      components: {
      'Navigation': Navigation
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import url("https://fonts.googleapis.com/css?family=PT+Sans&display=swap");
  * {
    font-family: 'PT Sans', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style-type: none;     
  }
  body {
  background:
        radial-gradient(
          ellipse at top left,
          rgba(255, 255, 255, 1) 40%,
          rgba(229, 229, 229, .9) 100%
        );
        //radial-gradient(ellipse at top left, #192525 40%, rgba(94, 91, 91, 0.9) 100%);
      width: 100vw;
      height: 100vh;
  }
  #app {
    display: flex;
    background-color: #252B3B;
  }
</style>
