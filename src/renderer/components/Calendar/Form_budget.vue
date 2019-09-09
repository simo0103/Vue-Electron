<template>
  <div>
    <form @submit.prevent="insertInDb">
            
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

        <label for="amount">Amount</label>
        <input v-model="amount" class="amount" @keypress="isNumber($event)">

        <label for="description">Description</label>
        <input v-model='description' class="description">
        <button>Submit</button>  

    </form>       
        
        <!-- CREARE COMPONENTE E DATABASE!!!! --> 
        <table class="form-table">
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

import db from '../../db/db'
export default {
     name: 'Form_budget',
     components: {
         db
    },
      props: {
        inAndOut: {default: function () { return [] }}
    },
    data () {
        return {
            selectedType: 'income',
            selectedCategory: null,
            amount: null,
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

        insertInDb() {
            const sqlite3 = require('sqlite3').verbose();
            const path = require("path");
            const dbPath = path.resolve(__dirname,"/Wallet.db.sqlite");
            let db = new sqlite3.Database(dbPath);
      
            if(this.selectedCategory && this.amount && this.selectedType) { 
                db
                .run('INSERT INTO budget(type, category, description, amount) VALUES ("'
                    + this.selectedType + '","' 
                    + this.selectedCategory + '","' 
                    + this.description + '",' 
                    + this.amount  +')');
                    this.inAndOut.push({
                        type: this.selectedType,
                        category: this.selectedCategory,
                        amount: this.amount,
                        description: this.description
                    })     
                    this.selectedCategory = '',
                    this.selectedType = '';
                    this.amount = '';
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
    table.form-table tr {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
</style>