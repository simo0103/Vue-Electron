<template>
  <div> 
       
        <table class="form-table">
            <tr>
                <td>Type</td>
                <td>Category</td>
                <td>Amount</td>
                <td>Description</td>
            </tr>
           
        
            <tr v-bind:key="`el-${index}`" v-for="(el, index) in selectFromDb">
                <td> {{el.type}} </td>
                <td> {{el.category}} </td>
                <td> {{el.amount}} </td> 
                <td> {{el.description}} </td>               
            </tr>

        </table>      
  </div>
</template>

<script>

import db from '../../db/db'
export default {
     name: 'Resoconto',
     components: {
         db
    },
      props: {

    },
    data () {
        return {
           
        }
    },
    computed: {

      selectFromDb() {
        const sqlite3 = require('sqlite3').verbose();
        const path = require("path");
        const dbPath = path.resolve(__dirname,"/Wallet.db.sqlite");
        let db = new sqlite3.Database(dbPath);  
        var array = [];       
        db.each(`SELECT * FROM budget`, [], (err, row) => {
          if (err){
              throw err;
          }
          console.log(row);              
            array.push({
                type: row.type,
                category: row.category,
                amount: row.amount,
                description: row.description
            })     
        })
        return array;
      },
    }
}
</script>

<style lang="scss">

    table.form-table tr {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
</style>