<template>

    <div class="modal">
            <img alt="close popup"  class="close" @click="$emit('close')" src="../../../svg/closeorange.svg"> 
            <div class="days">
                 <span>{{dayNumber}}</span>
                 <span>{{dayName}}</span>
            </div>
            <form>

            </form>
                               
    </div>
       
    </template>
    <script>
    import Calendar from "../Calendar/Calendar"
    export default {
    name: 'Modal',
    props: [
        'dayNumber',
        'dayName',
        'numOfDays'
    ],

    components: {
        Calendar
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
        box-shadow: 2px 2px 20px 1px;
        border-radius: 50%;
        cursor: pointer;
        width: 25px;
        position: absolute;
        right: 0;
        top: -40px;
    }
}

</style>