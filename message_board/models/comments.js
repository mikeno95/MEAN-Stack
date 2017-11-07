// models/comments.js

var mongoose = require('mongoose'); 
var path = require('path'); 

var Schema = mongoose.Schema; 

var CommentSchema = new Schema({
	name: String, 
	comment: String, 
	_message: {type: Schema.Types.ObjectId, ref:"Message"}
}); 

CommentSchema.path('name').required(true, "Name cannot be blank"); 
CommentSchema.path('comment').required(true, "Comment cannot be blank"); 
mongoose.model("Comment", CommentSchema); 
