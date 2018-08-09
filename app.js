var express = require("express");
var path = require("path");

var usersRouter = require("./routes/users");

var app = express();

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next) {
  res.locals.connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });
  res.locals.connection.connect();
  next();
});

// tells express to recognize root as being linked to users.
app.use("/allusers", usersRouter);

module.exports = app;

//replace with how you're handling server
var server = http.createServer(app);
server.listen(4007);
