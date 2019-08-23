<template>

    <div class="modal">
            <img alt="close popup"  class="close" @click="$emit('close')" src="../../../svg/closeorange.svg"> 
            <div class="days">
                 <span>{{dayNumber}}</span>
                 <span>{{dayName}}</span>
            </div>
            <Form></Form>
            
                               
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

.modal {
    background: #fff;
    position: absolute;
    box-shadow: 2px 2px 20px 1px;
    width: 50vw;
    top: 50%;
    height: 60vh;
    left: 50%;
    transform: translate(-50%, -50%);
    .close {
       
        cursor: pointer;
        width: 25px;
        position: absolute;
        right: 1%;
        top: 1%;
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