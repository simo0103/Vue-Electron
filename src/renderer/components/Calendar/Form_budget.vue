<template>
  <div>
    <form @submit.prevent="insertInDb">
            
        <div class="form-element">
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
        <div class="el">
            <label for="category">Category</label>
            <select id="categoryOptions" v-model="selectedCategory">
                <option v-bind:key="category"  :value="category" v-for="category in categoryArray" class="option">
                    {{category}}
                </option>
            </select>
        </div>
        <div class="el">
            <label for="amount">Amount</label>
            <input v-model.number="amount" class="amount" placeholder='0.00' @keypress="isNumber($event)">
        </div>
        <div class="el">
            <label for="description">Description</label>
            <input v-model='description' class="description">
        </div>
        <button>Submit</button>  

    </form>       
        
        <!-- CREARE COMPONENTE E DATABASE!!!! --> 
        <table class="form-table">
            <tr class="title">
                <td>Type</td>
                <td>Category</td>
                <td>Description</td>
                <td>Amount</td>
            </tr>
            <transition-group name="fade" tag="tbody">
                <tr v-bind:key="`el-${index}`" :class="selectedType == 'expense' ? 'expense' : 'income'" v-for="(el, index) in inAndOut">
                    <td> {{el.type}} </td>
                    <td> {{el.category}} </td>
                    <td> {{el.description}} </td>  
                    <td> {{el.amount.toLocaleString()}} </td>              
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
            let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE);
      
            if(this.selectedCategory && this.amount && this.selectedType) { 
                db
                .run('INSERT INTO budget(type, category, description, amount) VALUES ("'
                    + this.selectedType + '","' 
                    + this.selectedCategory + '","' 
                    + this.description + '",' 
                    + this.amount +')');
                    this.inAndOut.push({
                        type: this.selectedType,
                        category: this.selectedCategory,
                        description: this.description,
                        amount: this.amount
                    })     
                    this.selectedCategory = '',
                    this.selectedType = '';
                    this.description = '';        
                    this.amount = '';
            } 

        },

        isNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
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
    > .form-element {
        display: flex;
        justify-content: space-between;
    }
    .el {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
    }
    label {
        text-transform: capitalize;
        color: #868b8d
    }

    input {
        border: 1px solid lightgrey;
    }
       
}
table {
    width: 80%;
    margin: 0 auto;
    .title {
        display: flex;
    }
    tr {
        display: flex;
        flex-wrap: wrap;
    }
    td {
        flex-grow: 0;
        flex: 0 1 calc(100% / 4);
        border-right: 1px solid lightgray;
        text-align: center;
    }
}
</style>