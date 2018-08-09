var express = require("express");

//creating an instance of express's router
var router = express.Router();

//establishing connection to a db
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "acoolguy",
  password: "420698008",
  database: "flarps"
});

connection.connect();

//when request comes to root, select all from users in db, send back results.
router.get("/", function(req, res, next) {
  connection.query("SELECT * from users", function(error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

connection.end();

module.exports = router;
