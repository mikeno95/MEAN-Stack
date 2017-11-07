// controllers/messages.js

var mongoose = require('mongoose'); // grabs mongoose module
var Message = mongoose.model("Message"); // grabs Message model
var Comment = mongoose.model("Comment"); // grabs Comment model

module.exports = {
	create: function(req,res) { // create function to create comments and joins with message
		Message.findOne({_id:req.params.id}, function(err, message){ // find specific message for that comment using id
			if (err) {
				console.log(err); 
				console.log("Error at findOne for comments.js create()")
			} else { // if no error when finding message
				Comment.create({name: req.body.name, comment: req.body.comment}, function(err, comment){ // create new Comment
					if (err) {
						console.log(err); 
						console.log("Error at creating new comment")
					} else { // if no error when creating comment
						comment._message = message._id; // _message field in comment is set to id of specific message
						message._comments.push(comment); // new comment is added to the _comments list in message
						console.log(comment)
						console.log('pushed comment') // message for terminal 
						message.save(function(err) { // saves message
							if(err) {
								console.log(err); 
								console.log('error at saving comment in message')
							} else { // if no error when saving comment in message
								console.log("Succesfully added comment"); // success message
								return res.redirect('/'); // redirects to root
							}
						})
					}	
				})
			}
		})
	}
}