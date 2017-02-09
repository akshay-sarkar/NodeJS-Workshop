var express = require('express');
var app = express();

// req = The Request
// res = My response
app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/video/:videoId', function(req, res) {
  console.log('They hit this endpoint');
  console.log(req.params);
  res.send('You requested a video by the id ' + req.params.videoId);
});

console.log('Reving up the fryers');

// Goto http://localhost:3000
app.listen(3000);