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
           dataInDB : []
        }
    },
    computed: {

      selectFromDb() {
        const sqlite3 = require('sqlite3').verbose();
        const path = require("path");
        const dbPath = path.resolve(__dirname,"/Wallet.db.sqlite");
        let db = new sqlite3.Database(dbPath);  
        var array = [];       
        db.all(`SELECT * FROM budget`, [], (err, row) => {
          if (err){
              throw err;
          }
        
          this.dataInDB = row
             
              
        })
       
        return this.dataInDB
       
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