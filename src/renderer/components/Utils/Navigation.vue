<template> 
    <nav>
        <router-link class="link" to="/" exact>Home</router-link>
        <router-link class="link" to="/profile">Profile</router-link>
        <router-link class="link" to="/resoconto">Resoconto</router-link>
    </nav>   
</template>
<script>
export default {
  name: 'Navigation'  
}
</script>
<style lang="scss">
@import "../../style/navigation.scss";

</style>
