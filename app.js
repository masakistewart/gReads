var express 	= require('express'),
	app			= express(),
	morgan  	= require('morgan'),
	locus 		= require('locus'),
	bodyParser  = require('body-parser'),
	books 		= require('./routes/books'),
	authors 	= require('./routes/authors');


app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
	if(req.body) {
		console.log(req.body);
	}
	next();
});

app.get('/', function(req, res) {
	res.render('pages/index');
})
app.use('/books', books);
app.use('/authors', authors);
app.listen(8000)