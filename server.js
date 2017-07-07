//npm dependencies
var express = require('express');
var path = require ("path");
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var controller = require('./controllers/controller.js');
app.use('/', controller);

var app = express();


app.use(express.static(path.join(__dirname, '/public')));


app.use(bodyParser.urlencoded({ extended: false}));

app.engine('handlerbars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//server starter
var PORT = process.env.PORT || 3300;
app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
});
