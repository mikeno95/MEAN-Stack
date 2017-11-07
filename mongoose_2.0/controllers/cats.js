// controllers/cats.js
var mongoose = require('mongoose'); 
var Cat = mongoose.model('Cat'); 

var errors = [];

module.exports = {
	index: function(req,res) {
		Cat.find({}, function(err, cats) {
			if(err) {
				console.log(err); 
				console.log("error at index")
			} else {
				return res.render('index', {cats: cats});
			}
		})
	}, 
	new: function(req,res) {
		return res.render('new', {errors: errors})
	}, 
	create: function(req,res) {
		Cat.create({name: req.body.name, description: req.body.description}, function(err, cat){
			errors = [];
			if (err) {
				console.log(err); 
				console.log('error in create')
				for (const x in err.errors) {
					errors.push(err.errors[x].message);
				}
				return res.redirect('/cat/new');
			} else {
				console.log('Success!')
				return res.redirect('/cat/'+cat._id);
			}
		})
	}, 
	show: function(req,res) {
		Cat.findOne({_id: req.params.id}, function(err, cat) {
			if(err) {
				console.log(err)
				console.log('error at show page')
			} else {
				return res.render('show', {cat:cat});
			}
		})
	}, 
	edit: function(req,res) {
		Cat.findOne({_id: req.params.id}, function(err, cat) {
			if(err) {
				console.log(err)
				console.log('error at show page')
			} else {
				return res.render('edit', {cat:cat});
			}
		})
	}, 
	update: function(req,res) {
		Cat.update({_id:req.params.id}, {name: req.body.name, description:req.body.description}, function(err){
			if(err){
				console.log(err); 
				console.log('error in update')
			} else {
				console.log('sucess updating'); 
				return res.redirect('/cat/'+req.params.id)
			}
		})
	}, 
	destroy: function(req,res) {
		Cat.remove({_id:req.params.id}, function(err) {
			if(err) {
				console.log(err)
				console.log('error destroying')
			} else {
				return res.redirect('/');
			}
		})
	}
}