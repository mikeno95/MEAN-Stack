// models/messages.js 
var mongoose = require('mongoose'); // grabs mongoose module
var path = require('path'); // grabs path module

var Schema = mongoose.Schema; // set Schema to mongoose.schema

var MessageSchema = new Schema({ // create new MessageSchema
	name: String, 
	message: String, 
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}], // field for relating (one-to-many)
	create_at: {
		type: Date, 
		default: Date.now
	}
}); 

// validations
MessageSchema.path('name').required(true, "Name cannot be blank"); 
MessageSchema.path('message').required(true, "Message cannot be blank"); 

mongoose.model("Message", MessageSchema); // add new MessageSchema and set Message