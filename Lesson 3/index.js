var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Fake users
var contacts = [
  {
    id: 0,
    name: 'John Smith',
    age: 21
  },
  {
    id: 1,
    name: 'Jack Fred',
    age: 10
  }
]

// My Api
app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/contacts', function(req, res) {
  res.send(contacts);
});

app.get('/contacts/:id', function(req, res) {
  var id = req.params.id;

  // find user with linear search
  // in - iter though keys
  // of - iter though values
  for(var i = 0; i < contacts.length; i++) {
    var user = contacts[i];

    if(user.id == id) {
      return res.send(user);
    }
  }

  res.status(400).send({
    error: 'Contact not found'
  });
});

app.post('/contacts', function(req, res) {
  var newContact = {
    id: contacts.length,
    name: req.body.name,
    age: req.body.age
  }

  // Add to global contacts
  contacts.push(newContact);

  // Give back!
  res.status(201).send(newContact);
})

app.listen(3000);