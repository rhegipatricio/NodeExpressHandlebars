var express = require('express');
var path = require ("path");
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var controller = require('./controllers/controller.js');


var app = express();
var PORT = process.env.PORT || 3300;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', controller);

app.use(bodyParser.urlencoded({ extended: false}));

app.engine('handlerbars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
});
