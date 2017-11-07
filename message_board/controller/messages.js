// controllers/messages.js

var mongoose = require('mongoose'); 
var Message = mongoose.model("Message"); 

var errors = [];
module.exports = {
	index: function(req,res) {
		Message.find({}, false, true).populate("_comments").exec(function(err, messages){
			if(err){
				console.log(err); 
				console.log("Error at index")
			} else {
				console.log('hello there')
				for (message of messages) {
					console.log(message._comments); 
				}
				var context = {
					messages: messages, 
					errors: errors
				}
				return res.render('index', context);
			}
		})
	}, 
	create: function(req,res) {
		Message.create({name: req.body.name, message: req.body.message}, function(err) {
			errors = [];
			if (err) {
				console.log(err); 
				console.log('error at creating message'); 
				for (const x in err.errors) {
					errors.push(err.errors[x].message); 
				}
			} 
			return res.redirect('/')
		})
	}
}