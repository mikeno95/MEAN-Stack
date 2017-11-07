// models/cats.js 
var mongoose = require('mongoose'); // grabs mongoose module
var path = require('path'); // grabs path module 

var Schema = mongoose.Schema; // sets Schema to mongoose.Schema

var CatSchema = new Schema({ // create CatSchema
	name: String, 
	description: String, 
	created_at: {
		type: Date, 
		default: Date.now
	}
}); 

// validations
CatSchema.path('name').required(true, "Name cannot be blank"); 
CatSchema.path('description').required(true, "Add description!"); 

mongoose.model("Cat", CatSchema); // set CatSchema with model Cat