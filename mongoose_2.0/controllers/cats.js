// controllers/cats.js
var mongoose = require('mongoose'); // grabs mongoose module
var Cat = mongoose.model('Cat'); // grabs Cat model

var errors = []; // empty list for storing error messages

module.exports = {
	index: function(req,res) { // index function
		Cat.find({}, function(err, cats) { // find all cats
			if(err) {
				console.log(err); 
				console.log("error at index")
			} else { // if no error
				return res.render('index', {cats: cats}); // renders index page
			}
		})
	}, 
	new: function(req,res) { // new function for displaying new.ejs
		return res.render('new', {errors: errors})
	}, 
	create: function(req,res) { // create function to create new cat
		Cat.create({name: req.body.name, description: req.body.description}, function(err, cat){ // creates new cat
			errors = [];
			if (err) {
				console.log(err); 
				console.log('error in create')
				for (const x in err.errors) {
					errors.push(err.errors[x].message);
				}
				return res.redirect('/cat/new');
			} else { // if no error
				console.log('Success!')
				return res.redirect('/cat/'+cat._id); // redirects to show page
			}
		})
	}, 
	show: function(req,res) { // function for show page for specific cat
		Cat.findOne({_id: req.params.id}, function(err, cat) { // finds specific cat through id
			if(err) {
				console.log(err)
				console.log('error at show page')
			} else {
				return res.render('show', {cat:cat}); // renders show page, passes cat object
			}
		})
	}, 
	edit: function(req,res) { // displays edit page
		Cat.findOne({_id: req.params.id}, function(err, cat) { // find specific cat using id
			if(err) {
				console.log(err)
				console.log('error at show page')
			} else {
				return res.render('edit', {cat:cat}); // renders edit page, passes cat object
			}
		})
	}, 
	update: function(req,res) { // update function to update info for specific cat
		Cat.update({_id:req.params.id}, {name: req.body.name, description:req.body.description}, function(err){ // update cat
			if(err){
				console.log(err); 
				console.log('error in update')
			} else {
				console.log('sucess updating'); 
				return res.redirect('/cat/'+req.params.id) // redirects to show page if succesful
			}
		})
	}, 
	destroy: function(req,res) { // destroy function to remove specfic cat from db
		Cat.remove({_id:req.params.id}, function(err) {
			if(err) {
				console.log(err)
				console.log('error destroying')
			} else {
				return res.redirect('/'); // redirects to root route
			}
		})
	}
}