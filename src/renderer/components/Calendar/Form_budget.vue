<template>
  <div>
    <form>
            
        <div>
            <span>Event tipe:</span>
            <span 
            v-bind:key="type" 
            :value="type" 
            v-for="type in typeOptions"               
            >               
                <input 
                    type="radio" 
                    id="radio" 
                    v-bind:value="type"
                    v-model="selectedType"
                    @change="onChange($event)"
                >
                <label>{{type}}</label>
            </span>
        </div>
        
        <label for="category">Category</label>

        <select id="categoryOptions" v-model="selectedCategory">
            <option v-bind:key="category"  :value="category" v-for="category in categoryArray" class="option">
                {{category}}
            </option>
        </select>

        <label for="price">Amount</label>
        <input v-model="price" class="price" @keypress="isNumber($event)">

        <label for="description">Description</label>
        <input v-model='description' class="description">
        
    </form>       
        
        <button @click="addTask">Submit</button>  
        <!-- CREARE COMPONENTE E DATABASE!!!! --> 
        <table>
            <tr>
                <td>Type</td>
                <td>Category</td>
                <td>Amount</td>
                <td>Description</td>
            </tr>
        <transition-group name="fade" tag="tbody">
            <tr v-bind:key="`el-${index}`" :class="selectedType == 'expense' ? 'expense' : 'income'" v-for="(el, index) in inAndOut">
                <td> {{el.type}} </td>
                <td> {{el.category}} </td>
                <td> {{el.amount}} </td> 
                <td> {{el.description}} </td>               
            </tr>
        </transition-group> 
        </table>      
  </div>
</template>

<script>
export default {
     name: 'Form_budget',
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
  
            if(this.selectedType == 'expense') {
                this.categoryArray = this.outArray.slice(0)
            } else if(this.selectedType == 'income') {
                this.categoryArray = this.inArray.slice(0)
            }       
       },

       addTask() {
            if(this.selectedCategory && this.selectedType && this.price) {
                this.inAndOut.push({
                type: this.selectedType,
                category: this.selectedCategory,
                amount: this.price,
                description: this.description
                })
                this.selectedCategory = '',
                this.selectedType = '';
                this.price = '';
                this.description = '';
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
  form {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: auto;
        label {
            text-transform: capitalize;
            color: #868b8d
        }
  
        input {
            border: 1px solid lightgrey;
        }
       
    }
    table tr {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
</style>