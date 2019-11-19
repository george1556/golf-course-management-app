const knex = require("../db/knex");

exports.getAllCustomerTeeTimes = function(req, res) {
  knex("customers_tee_times").then(tee_times => res.json(tee_times));
};
