<template>
    <div class="overlay" @click.self="$emit('close')">
        <div class="modal">
            <div class="modal-header">
                <div class="addEvent">
                    <h2>Add event</h2>
                    <span>
                        <img alt="close popup" class="close" @click="$emit('close')" src="../../../svg/closeorange.svg"> 
                    </span>
                </div>
               
                <div class="date">
                    <span class="calendar"><img alt="selectedData" src="../../../svg/calendar.svg"></span>                 
                    <span class="dNum">{{dayNumber}}</span>
                    <span class="month">{{month}}</span>
                    <span class="year">{{year}}</span>                  
                </div>
                
            </div>
           
            <Form></Form>                                        
        </div>
    </div>
    
       
    </template>
    <script>
    import Calendar from "../Calendar/Calendar"
    import Form from "../Calendar/Form"
    export default {
    name: 'Modal',
    props: [
        'dayNumber',
        'dayName',
        'month',
        'numOfDays',
        'year'
    ],

    components: {
        Calendar,
        Form
    },
    data () {
        return {
            showModal: false,
        }
    },
    methods: {
       
    }
}

</script>
<style lang="scss">
 .overlay.open {
    width: 100%;  
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    z-index: 999;
    justify-content: center;
    align-items: center;
}
.modal {
    background: #fbfcfd;
    -webkit-box-shadow: 0px 10px 62px 44px rgba(212,210,219,0.33);
    -moz-box-shadow: 0px 10px 62px 44px rgba(212,210,219,0.33);
    box-shadow: 0px 10px 62px 44px rgba(212,210,219,0.33);    
    width: 40vw;
    top: 50%;
    height: 70vh;
    .modal-header {
            .addEvent {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 80px;
                background-color: white;
                border-bottom: 1px solid #AFC3CD;

                span {
                    display: flex;
                    align-items: center;
                }
            }
            .date {
                display: flex;
                padding: 15px 25px;
                border-radius: 50px;
                align-items: center;
                color: #afc3cd;
                font-size: 13px;
                border: 2px solid #AFC3CD;
                width: max-content;
                img {
                   width: 20px;
                   margin-right: 10px; 
                }
                .dNum, .month {
                    margin-right: 3px;
                }
            }   
        }
    
    .close {      
        cursor: pointer;
        width: 25px;
    }
    
   
}

</style>