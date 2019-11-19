exports.up = function(knex, Promise) {
  return knex.schema.createTable("customers", function(table) {
    table.increments();
    table.string("name");
    table.string("company");
    table.string("email");
    table.string("phone");
    table.string("address");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("customers");
};
