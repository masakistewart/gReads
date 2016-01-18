var express 	= require('express'),
	app			= express(),
	morgan  	= require('morgan'),
	locus 		= require('locus'),
	bodyParser  = require('body-parser');


app.use('views engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
	if(req.body) {
		console.log(req.body);
	}
	next();
})
app.use('/books', books)