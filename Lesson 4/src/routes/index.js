var router = require('express').Router();
var users = require('./users');

// Index route
router.get('/', function(req, res) {
  res.send('Server is up and running!');
});

// Add aditional routes
router.use('/users', users);

module.exports = router;