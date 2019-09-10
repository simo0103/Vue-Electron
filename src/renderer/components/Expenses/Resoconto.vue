<template>
  <div>      
        <table class="recap-table">
            <tr class="columnName">
                <td>Type</td>
                <td>Category</td>
                <td>Description</td>
                <td>Amount</td>
            </tr>
           
        
            <!-- <tr v-bind:key="el.rowid"  v-for="el in getData">
                <td> {{el.type}} </td>
                <td> {{el.category}} </td>
                <td> {{el.description}} </td>  
                <td> {{el.amount}} </td>              
            </tr> -->
            <tr>
                <td>Total Income</td>
                <td></td>
                <td></td>               
                <td>{{getToltalIncome}}</td> 
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

      // getData() {
      //   const sqlite3 = require('sqlite3').verbose();
      //   const path = require("path");
      //   const dbPath = path.resolve(__dirname,"/Wallet.db.sqlite");
      //   let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE); 
      //   var data = null;
      //   db.each(`SELECT rowid, * FROM budget`, (err, rows) => {
      //       if(err != null) {
      //           return err;
      //       } else {
      //          console.log(rows);
      //         data = rows
      //       }
            
         
      //   });
      //   console.log(data)
      //   return data;
      // },

      getToltalIncome() {
        const sqlite3 = require('sqlite3').verbose();
        const path = require("path");
        const dbPath = path.resolve(__dirname,"/Wallet.db.sqlite");
        let db = new sqlite3.Database(dbPath);  
        var totIncome = '';
    
        db.serialize(() => {
          db.get("SELECT SUM(amount) AS totale FROM budget WHERE type = 'income'", (err, row) => {
            console.log(row)
            totIncome = row.totale
            
          })
          db.close();
        })
        return totIncome;
      }
    }
}
</script>

<style lang="scss">

    table.recap-table {
       
        width: 100%;
    }
</style>