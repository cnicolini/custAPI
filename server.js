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

// Register Routes
var routes = require('./api/routes/customerRoutes');
routes(app);

app.listen(port);

console.log('Customer API started on port: ' + port);
