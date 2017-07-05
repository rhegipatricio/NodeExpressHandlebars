var express = require('express');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require("mysql");

var PORT = process.env.PORT || 3300;