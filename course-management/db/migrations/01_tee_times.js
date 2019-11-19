exports.up = function(knex, Promise) {
  return knex.schema.createTable("tee_times", function(table) {
    table.increments();
    table.datetime("time");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("tee_times");
};
