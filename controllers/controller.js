var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root:",
	password: "",
	database: "nba"
});

connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as ID " + connection.threadID);
});






module.exports = connection;