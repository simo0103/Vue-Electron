<template>
  <div id="wrapper">
    <main>
     <h1>DASHBOARD</h1>
    </main>
  </div>
</template>

<script>
 export default {
  name: 'Home' 
}
</script>

<style>
  @import "../style/home.scss";

  #wrapper {
    width: 100vw;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

</style>
