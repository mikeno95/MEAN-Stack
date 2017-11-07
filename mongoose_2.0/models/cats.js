// models/cats.js 
var mongoose = require('mongoose'); 
var path = require('path'); 

var Schema = mongoose.Schema; 

var CatSchema = new Schema({
	name: String, 
	description: String, 
	created_at: {
		type: Date, 
		default: Date.now
	}
}); 

CatSchema.path('name').required(true, "Name cannot be blank"); 
CatSchema.path('description').required(true, "Add description!"); 

mongoose.model("Cat", CatSchema);