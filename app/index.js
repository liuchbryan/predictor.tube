var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

http.listen(3000, function(){
  console.log(path.join(__dirname, 'public'));
  console.log('listening on port 3000');
});
