// server.js

var express = require('express'); // grabs express module
var app = express(); // invoke express

var path = require('path'); // grabs path module
app.use(express.static(path.join(__dirname,'/static'))); // set static folder
app.set('views', path.join(__dirname, '/views')); // set views folder
app.set('view engine', 'ejs'); // set to read ejs files

var bp = require('body-parser'); // grabs body-parser module
app.use(bp.json()); // tells bp to read json
app.use(bp.urlencoded({extended:true})); // tells bp to read post data

var port = 8000; // set port number
app.listen(port, function() { // tell app to listen to that port number
	console.log(`Listening to ${port}`); 
})

require("./config/mongoose"); // links mongoose.js
require("./config/routes")(app); // links routes.js