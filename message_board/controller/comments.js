// controllers/messages.js

var mongoose = require('mongoose'); 
var Message = mongoose.model("Message"); 
var Comment = mongoose.model("Comment"); 

module.exports = {
	create: function(req,res) {
		Message.findOne({_id:req.params.id}, function(err, message){
			if (err) {
				console.log(err); 
				console.log("Error at findOne for comments.js create()")
			} else {
				Comment.create({name: req.body.name, comment: req.body.comment}, function(err, comment){
					if (err) {
						console.log(err); 
						console.log("Error at creating new comment")
					} else {
						comment._message = message._id; 
						message._comments.push(comment); 
						console.log(comment)
						console.log('pushed comment')
						message.save(function(err) {
							if(err) {
								console.log(err); 
								console.log('error at saving comment in message')
							} else {
								console.log("Succesfully added comment"); 
								return res.redirect('/'); 
							}
						})
					}	
				})
			}
		})
	}
}