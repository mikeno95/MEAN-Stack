var express = require('express'); // grabs express
var app = express(); // invoke express

var path = require('path'); // grabs path module
app.use(express.static(path.join(__dirname, '/static'))); // set static folder
app.set('views', path.join(__dirname, '/views')); // set views folder
app.set('view engine', 'ejs'); // set view engine for ejs

var bp = require('body-parser'); // grabs body-parser module
app.use(bp.json()); // reading json
app.use(bp.urlencoded({extended:true})); // for postdata

var port = 8000; // set port number
app.listen(port, function() { // tell app to listen to port#
	console.log(`Listening on port ${port}`) // success message
});

require("./config/mongoose"); // sets mongoose.js in config folder
require("./config/routes")(app); // sets routes.js