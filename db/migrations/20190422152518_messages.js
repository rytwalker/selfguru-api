exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.uuid('id').primary();
    table.string('title').notNullable();
    table.string('date_time_to_post').notNullable();
    // user_id
    table
      .uuid('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable();

    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages');
};
