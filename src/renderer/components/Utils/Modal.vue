<template>
    <div class="overlay" @click.self="$emit('close')">
        <div class="modal">
            <div class="modal-header">
                <div class="days">
                    <span>{{dayName}}</span> - 
                    <span>{{dayNumber}}</span>
                    <span>{{month}}</span>
                    
                </div>
                <div>
                    <img alt="close popup" class="close" @click="$emit('close')" src="../../../svg/closeorange.svg"> 
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
        'numOfDays'
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
    background: rgba(116, 130, 134, 0.4);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    z-index: 999;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
}
.modal {
    background: #fff;
    box-shadow: 2px 2px 20px 1px;
    width: 50vw;
    top: 50%;
    height: 60vh;
    .modal-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        text-transform: uppercase;
    }
    .close {      
        cursor: pointer;
        width: 25px;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: auto;
        label {
            text-transform: uppercase;
            color: #868b8d
        }
  
        input {
            border: 1px solid lightgrey;
        }
       
    }
   
}

</style>