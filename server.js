// modules ------------
var express = require('express');
var app = express();
var mongoose = require('mongoose');

// configuration ----------
//config files
var db = require('./config/db');

var port = process.env.PORT || 8080;
// mongoose.connect(db.url); // connect to our mongoDB database (uncomment after you enter in your own credentials in config/db.js)

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// routes --------
require('./app/routes')(app);

// start app --------
app.listen(port);
console.log('Listening on ' + port);
exports = module.exports = app;