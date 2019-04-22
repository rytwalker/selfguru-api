exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.uuid('id').primary();
    table
      .string('email')
      .unique()
      .notNullable();
    table.string('password').notNullable();
    table
      .string('username')
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
