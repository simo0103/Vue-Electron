<template> 
    <nav>
        <ul>            
            <router-link tag="li" class="link" to="/" exact> 
                <font-awesome-icon icon="chart-line"></font-awesome-icon>
                <span class="link-text">Dashboard</span>
            </router-link>      
            <router-link tag="li" class="link" to="/calendar">
                <font-awesome-icon icon="calendar-alt"></font-awesome-icon>
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
