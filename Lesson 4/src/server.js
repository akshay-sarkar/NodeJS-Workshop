var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Setup the app
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup mongoose
// This is what needs to be replaced with your URI
// https://mlab.com for a free mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/learn-node', function(err) {
  if(err) console.error('Mongo had an error:', err.message);
  console.log('Mongo db connected!');
});

// Register all of our models
require('./models/user');

// Setup routes
app.use(require('./routes'));

// Start the app
app.listen(3000, function() {
  console.log('Server up and running!');
});