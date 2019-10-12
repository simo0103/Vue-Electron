const sqlite3 = require('sqlite3').verbose();
const path = require("path");
const dbPath = path.resolve(__dirname,"/Wallet.db.sqlite")
 
// open the database connection
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
});
 
db.serialize(() => {
  // Queries scheduled here will be serialized.

    //---------DELETE TABLE -----------------//
    // db.run('DROP TABLE IF EXISTS income')
    // console.log('table deleted')

  db
    .run('CREATE TABLE IF NOT EXISTS budget (type TEXT, category TEXT, description TEXT, amount INTEGER )')
    //.run('DELETE FROM budget')
    .each(`SELECT rowid, * FROM budget`, (err, row) => {
          if (err){
              throw err;
          }
        //  console.log(row);
    })
});
 
// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

export default db;
