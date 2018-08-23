// dependencies
var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');

//import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');

//express setup 
var app = express();
var PORT = process.env.PORT || 8080;

//sets up the Express app to handle data parsing
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

//override w POST having ?_method=DELETE
app.use(methodOverride('_method'));

//set handlebars 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

// test
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
