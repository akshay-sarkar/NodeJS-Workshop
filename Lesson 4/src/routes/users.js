var router = require('express').Router();
var mongoose = require('mongoose');

var User = mongoose.model('User');

// List of users
router.get('/', function(req, res) {
  User.find()
    .then(function(users) {
      res.send(users);
    })
    .catch(function(e) {
      res.status(400).send({error: e.message});
    });
});

// Create a user
router.post('/', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var age = req.body.age;

  // Validate the data
  if(!name || !email || !age) {
    return res.status(400).send({
      error: 'name, email, age are required fields'
    });
  }

  var newUser = new User({
    name: name,
    email: email,
    age: age
  });

  newUser.save()
    .then(function(user) {
      res.status(201).send(user);
    })
    .catch(function(e) {
      res.status(400).send({error: e.message});
    });
});

// Get a single user
router.get('/:id', function(req, res) {
  User.findById(req.params.id)
    .then(user => {
      if(!user) throw new Error('User not found');
      res.send(user);
    })
    .catch(function(e) {
      res.status(400).send({error: e.message});
    });
});

// Delete a user
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id)
    .then(function(user) {
      if(!user) throw new Error('User not found');
      res.send();
    })
    .catch(function(e) {
      res.status(400).send({error: e.message});
    });
});

module.exports = router;