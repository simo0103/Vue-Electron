<template>
    <div>
       <nav>
           <router-link to="/home">Home</router-link>
           <router-link to="/profile">Profile</router-link>
           <router-link to="/resoconto">Resoconto</router-link>
       </nav>
    </div>
</template>
<script>
export default {
  name: 'Navigation'
  
}
</script>
<style>
@import "../../style/navigation.scss";
</style>
