<template> 
    <nav>
        <ul>            
            <router-link tag="li" class="link" to="/" exact> 
                <font-awesome-icon icon="home"></font-awesome-icon>
                <span class="link-text">Home</span>
            </router-link>      
            <router-link tag="li" class="link" to="/profile">
                <font-awesome-icon icon="home"></font-awesome-icon>
                <span class="link-text">Profile</span>
            </router-link>
        
            <router-link tag="li" class="link" to="/resoconto">
                <font-awesome-icon icon="home"></font-awesome-icon>
                <span class="link-text">Resoconto</span>
            </router-link>
                 
        </ul>
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
