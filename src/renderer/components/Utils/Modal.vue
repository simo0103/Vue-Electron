<template>

            <div class="modal">
                <span class="close" @click="$emit('close')" >X</span>
            </div>
       
    </template>
    <script>
    export default {
    name: 'modal',

    data () {
        return {
            showModal: false
        }
    },
    methods: {
       
    },
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
    }
}

</style>