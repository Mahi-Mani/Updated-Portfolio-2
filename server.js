// Require express
var express = require("express");
var app = express();

var exphbs = require("express-handlebars");
// require("dotenv").config();
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring our models for syncing
var db = require("./models");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var routes = require('./routes/api-routes.js');
// var routes = require('./routes/html-routes.js');
app.use(routes);
// require("./routes/api-routes.js")(app);

// Handlebars engine

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

