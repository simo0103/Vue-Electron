const sqlite3 = require('sqlite3').verbose();
const path = require("path");
const dbPath = path.resolve(__dirname,"/Wallet.db")
 
// open the database connection
let db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  }
});
 
db.serialize(() => {
  // Queries scheduled here will be serialized.

    //---------DELETE TABLE -----------------//
    /*db.run('DROP TABLE tableName')
    console.log('table deleted')*/

  db.run('CREATE TABLE IF NOT EXISTS income (category TEXT, description TEXT, amount INTEGER )')
    // .run(`INSERT INTO greetings(message)
    //       VALUES('Hi'),
    //             ('Hello'),
    //             ('Welcome')`)
    // .each(`SELECT message FROM greetings`, (err, row) => {
    //   if (err){
    //     throw err;
    //   }
    //   console.log(row.message);
    // });
  
});
 
// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
});

export default db;
