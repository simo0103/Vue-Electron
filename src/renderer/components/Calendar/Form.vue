<template>

    <div id="form">     
        <form>

            <label for="inOut">Type</label>

            <select name="" id="typeOptions" v-model="selectedType" @change="onChange($event)">
                <option v-bind:key="type" :value="type" v-for="type in typeOptions" class="option">
                    {{type}}
                </option>
            </select>

            <label for="category">Category</label>

            <select id="categoryOptions" v-model="selectedCategory">
                <option v-bind:key="category"  :value="category" v-for="category in categoryArray" class="option">
                    {{category}}
                </option>
            </select>

            
            <label for="description">Description</label>
            <input v-model='description' class="description">

            <label for="price">amount</label>
            <input v-model="price" class="price" @keypress="isNumber($event)">
           
        </form>       
        <div class="formRecap">
            <span>{{selectedType}}</span>
            <span>{{selectedCategory}}</span>
            <span>{{description}}</span>
            <span>{{price}}</span>
        </div>   
        <button @click="addTask">Submit</button>         
        <transition-group name="fade" tag="ul">
            <li v-bind:key="index" v-for="(el, index) in inAndOut">
                {{el.type}} {{el.category}}
            </li>
        </transition-group>  
    </div>
       
    </template>
    <script>
   
    export default {
    name: 'Form',

    components: {
        
    },
    props: {
        inAndOut: {default: function () { return [] }}
    },
    data () {
        return {
            selectedType: 'income',
            selectedCategory: null,
            price: null,
            description: null,
            categoryArray: ['salary', 'gift', 'refound'],
            typeOptions: ['income', 'expense'],
            inArray: ['salary', 'gift', 'refound'],
            outArray: ['food & drinks', 'pet', 'shopping'],

        }
    },
    methods: {
       onChange(event) {
  
            if(this.selected == 'expense') {
                this.categoryArray = this.outArray.slice(0)
            } else {
                this.categoryArray = this.inArray.slice(0)
            }

          
       },

       addTask() {
            if(this.selectedCategory && this.selectedType) {
                this.inAndOut.push({
                type: this.selectedType,
                category: this.selectedCategory
                })
                this.selectedCategory = '',
                this.selectedType = '';
           }
           
       },

       isNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();;
            } else {
                return true;
            }
       }
    }
}

</script>
<style lang="scss">
</style>