<template>

    <div id="form">     
        <form>

            <label for="inOut">Type</label>
            <select name="" id="typeOptions" v-model="selected">
                <option v-bind:key="type.value" :value="type.value" v-for="type in typeOptions" class="option">
                    {{type.text}}
                </option>
            </select>

            <label for="category">Category</label>
            <select id="categoryOptions">
                <option v-bind:key="category"  :value="category.value" v-for="category in categoryOptions" class="option">
                    {{category.text}}
                </option>
            </select>
            <label for="description">Description</label>
            <input class="description">
        </form>       
                               
    </div>
       
    </template>
    <script>
   
    export default {
    name: 'Form',

    components: {
        
    },
    data () {
        return {
            selected: '',
            typeOptions: [
                {  text:'income', value: 'income' },
                {  text:'expense', value: 'expense' }
            ],

            categoryOptions: [
                {  text:'food', value: 'food' },
                {  text:'house', value: 'house' },
                {  text:'pet', value: 'pet' },
                {  text:'house', value: 'house' }
            ]
        }
    },
    methods: {
       
    }
}

</script>
<style lang="scss">
</style>