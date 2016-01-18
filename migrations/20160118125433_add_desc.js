
exports.up = function(knex, Promise) {
  return knex.schema.table('books', function(table) {
  	table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('books', function(table) {
  	table.dropColumn('description');
  });
};
