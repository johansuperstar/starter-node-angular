// modules ------------
var express = require('express'),
	app = express(),
	mongoose = require('mongoose');

// configuration ----------
var db = require('./app/config/db');

var port = process.env.PORT || 8080;

mongoose.connect(db.url);

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