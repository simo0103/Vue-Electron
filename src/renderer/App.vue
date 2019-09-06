<template>
  <div id="app">   
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import db from './db/db.js'
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
  background: #f8f9fb
        //radial-gradient(ellipse at top left, #192525 40%, rgba(94, 91, 91, 0.9) 100%);
     
  }
</style>
