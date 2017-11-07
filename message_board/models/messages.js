// models/messages.js 
var mongoose = require('mongoose'); 
var path = require('path'); 

var Schema = mongoose.Schema; 

var MessageSchema = new Schema({
	name: String, 
	message: String, 
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}], 
	create_at: {
		type: Date, 
		default: Date.now
	}
}); 

MessageSchema.path('name').required(true, "Name cannot be blank"); 
MessageSchema.path('message').required(true, "Message cannot be blank"); 

mongoose.model("Message", MessageSchema);