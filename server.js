var express = require('express');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require("mysql");

var app = express();
app.use(express.static(process.cwd() + '/public'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

var exphbs = require('express-handlebars');
app.engine('handlerbars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlerbars');

var router = require('./controllers/controller.js');

var PORT = process.env.PORT || 3300;
app.listen(PORT);
console.log('Listening on ' + PORT);