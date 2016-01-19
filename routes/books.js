var express = require('express'),
	router 	= express.Router(),
	knex 	= require('../db/knex');

router.get('/',function(req,res) {
	knex('books').then(function(data) {
		console.log(data);
		res.render('pages/books', {books: data})
	})
});

router.get('/new', function(req, res) {
	res.render('pages/addBook', {authors: null})
});

router.get('/book/:id',function(req,res) { 
  knex('books').where({book_id: req.params.id}).then(function(data) {
  	res.render('pages/book', {books: data});
  });
});

router.post('/new', function(req, res) {
	var title = req.body['book-title'],
		genre = req.body['genre'],
		cover_url = req.body['cover-image-url'],
		description = req.body.description;

	knex('books').insert({'genre': genre, title: title, 'cover-url': cover_url, description: description}).then(function() {
		knex('books').where({title: title}).then(function(bookData){
				res.redirect('/');
		});
	});
})

router.get('/book/:id/edit',function(req,res) { 
  var id = req.params.id;
  	res.render('pages/editBook', {data: id, err: null});
});

router.put('/book/:id/edit',function(req,res) { 
  var id = req.params.id,
	  title = req.body['book-title'],
	  genre = req.body['genre'],
	  cover_url = req.body['cover-image-url'],
	  description = req.body.description;

	  if(!(req.body['book-title'] === '' && req.body['genre'] === '' && eq.body['cover-image-url'] === '' && req.body.description === '')){
		  knex('books').where({book_id: id}).update({'genre': genre, title: title, 'cover-url': cover_url, description: description}).then(function(){
		  	res.redirect('/books');
		  });
		} else {
			res.redirect('/authors/author/' + req.params.id + '/edit', {data: req.body.params, err: "fill all the fields"});
		}
});

router.delete('/book/:id/del',function(req,res) { 
  knex('books').where({book_id: req.params.id}).del().then(function() {
  	res.redirect('/books')
  });
 });




module.exports = router;