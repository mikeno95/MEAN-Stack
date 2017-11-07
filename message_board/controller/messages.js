// controllers/messages.js

var mongoose = require('mongoose'); // grabs mongoose module
var Message = mongoose.model("Message"); // grabs Message model

var errors = []; // empty list for error messages

module.exports = {
	index: function(req,res) { // index function for rendering index page
		Message.find({}, false, true).populate("_comments").exec(function(err, messages){ // grabs all message, and reads/populates relational fields (comments)
			if(err){
				console.log(err); 
				console.log("Error at index")
			} else { // if no error
				var context = {
					messages: messages, // passes messages object 
					errors: errors // passes error list with error messages
				}
				return res.render('index', context); // renders index and passes context
			}
		})
	}, 
	create: function(req,res) { // create function to create new message
		Message.create({name: req.body.name, message: req.body.message}, function(err) {
			errors = []; // empties error message
			if (err) { // if error
				console.log(err); 
				console.log('error at creating message'); 
				for (const x in err.errors) { // pushes error messages into error list
					errors.push(err.errors[x].message); 
				}
			} 
			return res.redirect('/') // redirects back to root route
		})
	}
}