// config/mongoose.js

var mongoose = require('mongoose'); // grabs mongoose module
var path = require('path'); // grabs path module
var fs = require('fs'); // grabs fs module

var mp = path.join(__dirname, './../models'); // set file path for models

mongoose.connect('mongodb://localhost/cat_db'); // connect to db

fs.readdirSync(mp).forEach(function(file) { // read each file in models folder
	if(file.indexOf(".js") >= 0) { // if file is a .js
		require(mp + '/' + file); // require that file
	}
})