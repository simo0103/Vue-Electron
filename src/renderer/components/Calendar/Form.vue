<template>

    <div id="form"> 
        <div class="radio">
            <span 
                v-bind:key="event" 
                :value="event" 
                v-for="event in eventType">   
                   
                <input 
                    type="radio" 
                    id="radio" 
                    v-bind:value="event"
                    v-model="eventToShow">
                        
                    <label>{{event}}</label>
                 
            </span>    

        </div>
      
        <keep-alive>
            <component class="mainForm" v-bind:is="eventToShow"></component>
        </keep-alive>
           
  
       
    </div>
       
    </template>
    <script>
    import budget from "./Form_budget"
    import event from "./Form_event"
    import appointment from "./Form_appointment"

    export default {
    name: 'Form',

    components: {
        budget,
        event,
        appointment
    },
    
    data () {
        return {
            eventType: ['budget', 'appointment', 'event'],
            eventToShow: 'budget'

        }
    },
    methods: {

    }
}

</script>
<style lang="scss">

    #form {
        padding: 10px 20px;
        .radio {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        label {
            text-transform: capitalize;
        }
        
    }
</style>