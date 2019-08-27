<template> 
    <nav>
        <ul>            
            <router-link tag="li" class="link" to="/" exact> 
                <span class="link-text">Dashboard</span>
            </router-link>      
            <router-link tag="li" class="link" to="/calendar">
                <span class="link-text">Calendar</span>
            </router-link>
        
            <router-link tag="li" class="link" to="/resoconto">
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
