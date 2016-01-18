
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table) {
  	table.increments('author_id');
  	table.string('first-name');
  	table.string('last-name');
  	table.string('bio');
  	table.string('picture-url');
  	// table.integer('books_id').unsigned().index().references('book_id').inTable('authors_books');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
