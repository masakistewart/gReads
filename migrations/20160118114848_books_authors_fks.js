exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_authors', function(table){
  	table.increments();
  	table.integer('books_id').unsigned().index().references('book_id').inTable('books');
  	table.integer('authors_id').unsigned().index().references('author_id').inTable('authors');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books_authors');
};