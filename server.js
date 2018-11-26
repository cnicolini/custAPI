var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Customer = require('./api/models/customerModel');
var bodyParser = require('body-parser');


// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CustomerDB');

// Install and use Body Parser before handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Register Routes
var routes = require('./api/routes/customerRoutes');
routes(app);

app.listen(port);

console.log('Customer API started on port: ' + port);
