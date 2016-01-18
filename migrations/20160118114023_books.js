
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
  	table.increments('book_id')
  	table.string('title')
  	table.string('genre')
  	table.string('cover-url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
