var _ = require('underscore'),
	 	mongoose = require('mongoose'),
		postModel = require('../models/post'),
		Post = postModel.model;
		

exports.all = function(req, res) {
	Post.
		find().
		sort('-writtenAt').
		exec(function(err, posts) {
			if (err)
				res.send(err);
			res.json(posts);
		});
};

exports.single = function(req, res) {
	Post.findById(req.params.id, function(err, post) {
	    if (err)
	    	res.send(err);

	    res.json(post);
	});
};

exports.create = function(req, res) {
	var data = req.body;

	new Post({
	    heading: data.heading, 
		body: data.body, 
		writtenAt: new Date()
	}).
	save(function(err) {
		res.send();
	});
};

exports.delete = function(req, res) {
	Post.findById(req.params.id, function(err, post) {
	    post.remove(function(err, post) {
	      res.send(post);
	    });
	});
};

exports.update = function(req, res) {
	var data = req.body;

	Post.findById(data._id, function(err, post) {
		post.heading = data.heading;
		post.body = data.body;
		post.updatedAt = new Date();

		post.save(function(err, post) {
			res.send(post);
		});
	});
};