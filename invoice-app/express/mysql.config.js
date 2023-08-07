const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",  
//   database: "invoice",
// });

// connection.connect();

// connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
//   if (err) throw err;
//   console.log("The solution is: ", rows[0].solution);
// });
// module.exports = connection;  
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "invoice",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};