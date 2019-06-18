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

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
     
  }
  body {
  background:
        radial-gradient(
          ellipse at top left,
          rgba(255, 255, 255, 1) 40%,
          rgba(229, 229, 229, .9) 100%
        );
      width: 100vw;
      height: 100vh;
  }
</style>
