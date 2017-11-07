// config/mongoose.js

var mongoose = require('mongoose'); // grabs mongoose module
var path = require('path'); // grabs path module
var fs = require('fs'); // grabs fs module
var mp = path.join(__dirname, './../models'); // set models folder

mongoose.connect('mongodb://localhost/messageBoardDB'); // connect to database (creates a new one if doesn't exist)

fs.readdirSync(mp).forEach(function(file){ // read each file in models 
	if(file.indexOf(".js") >= 0) { // if file is .js (models)
		require(mp + "/" + file); // require that file
	}
})