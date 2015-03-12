var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var path = require('path');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(function (req, res, next) {
  console.log(req.body) // populated!
  next()
});

var port = process.env.PORT || 8934;

//Routing
server.get('/', function(req, res) {

	res.render('home.ejs');

});

//More Setup
server.use(express.static(__dirname + '/static'));

server.listen(port);
console.log('kazarin.me running on port ' + port);