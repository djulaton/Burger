// require mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mateo",
  database: "burger_db"
});

// Initiate MySQL Connection.
if (process.env.JAWSDB_MARIA_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mateo",
    database: "burgers_db"
  });

};

connection.connect(function (err) {
  if (err) {
    console.error("error connection: " + err.stack);
    return;
  }
  console.log("connected as id" + connection.threadId);
});

module.exports = connection;

