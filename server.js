
var express = require('express');
// Bootstrap express
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// URLS management
app.get('/', function (req, res) {
    res.send("<a href='/users'>Users Data</a>");
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
