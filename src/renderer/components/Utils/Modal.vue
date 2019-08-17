<template>
    <div class="overlay">
        <div class="modal"></div>
    </div>
    </template>
    <script>
    export default {
    name: 'modal',

    data () {
        return {
            visible: this.show
        }
    },
}

</script>
<style lang="scss">
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(119, 116, 134, 0.21);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    background: #fff;
    box-shadow: 2px 2px 20px 1px;
    width: 50vw;
    height: 60vh;
}

</style>