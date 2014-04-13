var posts = require('./controllers/posts');

module.exports = function(app) {


	/* --- Posts routes --- */
	
	app.get('/api/posts', posts.all);

	app.get('/api/posts/:id', posts.single);

	app.post('/api/posts', posts.create);

	app.delete('/api/posts/:id', posts.delete);

	app.put('/api/posts', posts.update);


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load public/views/index.html file
	});

};