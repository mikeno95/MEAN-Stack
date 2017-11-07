// config/mongoose.js

var mongoose = require('mongoose'); 
var path = require('path'); 
var fs = require('fs'); 
var mp = path.join(__dirname, './../models'); 

mongoose.connect('mongodb://localhost/messageBoardDB'); // connect to 'user_db' database (creates a new one if doesn't exist)
mongoose.connection.on('error', function(err){});

fs.readdirSync(mp).forEach(function(file){
	if(file.indexOf(".js") >= 0) {
		require(mp + "/" + file); 
	}
})