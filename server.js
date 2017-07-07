var express = require('express');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require("mysql");
var path = require ("path");

var app = express();
var PORT = process.env.PORT || 3300;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false}));

var exphbs = require('express-handlebars');
app.engine('handlerbars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/controller.js');

var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: '',
	database: '' 
});

connection.connect(function(error) {
	if(error){
		throw error;
	}
	console.log('Connected to MySQL server as ID = ', connection.threadId);
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});
