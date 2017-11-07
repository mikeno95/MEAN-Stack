var express = require('express'); 
var app = express(); 

var path = require('path');
app.use(express.static(path.join(__dirname, '/static'))); 
app.set('views', path.join(__dirname, '/views')); 
app.set('view engine', 'ejs'); 

var bp = require('body-parser'); 
app.use(bp.json()); 
app.use(bp.urlencoded({extended:true})); 

var port = 8000; 
app.listen(port, function() {
	console.log(`Listening on port ${port}`)
});

require("./config/mongoose");
require("./config/routes")(app);