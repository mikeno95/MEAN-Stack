// models/comments.js

var mongoose = require('mongoose'); // grabs mongoose module
var path = require('path'); // grabs path module

var Schema = mongoose.Schema; // set Schema to mongoose.Schema

var CommentSchema = new Schema({ // create new Schema for comments
	name: String, 
	comment: String, 
	_message: {type: Schema.Types.ObjectId, ref:"Message"} // field for relating with Message
}); 

// validations
CommentSchema.path('name').required(true, "Name cannot be blank"); 
CommentSchema.path('comment').required(true, "Comment cannot be blank"); 

mongoose.model("Comment", CommentSchema); // set CommentSchema to Comment 
