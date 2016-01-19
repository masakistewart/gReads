var express = require('express'),
	router 	= express.Router(),
	knex 	= require('../db/knex');


router.get('/',function(req,res) {
	knex('authors').then(function(data) {
		console.log(data);
		res.render('pages/authors', {authors: data});
	});
 });

router.get('/new', function(req, res) {
	knex('books').then(function(data) {
		res.render('pages/addAuthor', {books: data})
	})
});

router.get('/author/:id',function(req,res) { 
  knex('authors').where({author_id: req.params.id}).then(function(data) {
  	res.render('pages/author', {author: data, books: null});
  })
 });

router.get('/author/:id/edit',function(req,res) {
	var id = req.params.id;
  	res.render('pages/editAuthor', {data: id, err: null});
 });


router.put('/author/:id/edit',function(req,res) {
		var firstName = req.body.firstname,
			lastName = req.body['last-name'],
			bio = req.body.bio,
			pictureUrl = req.body['picture-url'];

	if(!(req.body.firstname === '' && req.body['last-name'] === '' && req.body['picture-url'] === '' && req.body.bio === '')) {
	  knex('authors').where({author_id: req.params.id}).update({'first-name': firstName, 'last-name': lastName, 'bio': bio, 'picture-url': pictureUrl}).then(function() {
	  	res.redirect('/authors');
	  })
	} else {
		res.redirect('/authors/author/' + req.params.id + '/edit', {data: req.body.params, err: "fill all the fields"});
	}
});

router.delete('/author/:id/del',function(req,res) { 
  	res.redirect('/authors');
});

router.post('/new', function(req, res) {
	var firstName = req.body.firstname,
		lastName = req.body['last-name'],
		bio = req.body.bio,
		pictureUrl = req.body['picture-url'],
		book_id_fk = req.body.books || null;
		console.log(firstName)

	knex('authors').insert({'first-name': firstName, 'last-name': lastName, 'bio': bio, 'picture-url': pictureUrl}).then(function() {
		knex('authors').where({'first-name': firstName, 'last-name': lastName}).then(function(authData){
			knex('books').where({book_id: book_id_fk}).then(function(bookData){
				res.redirect('/');
			})
		});
	});
})

module.exports = router;