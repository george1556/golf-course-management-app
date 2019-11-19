const knex = require("../db/knex");

//Gets a list of all the customers
exports.getAllCustomers = function(req, res) {
  knex("customers").then(customers => res.json(customers));
};

//Retrieves a single customer
exports.getOneCustomer = function(req, res) {
  knex("customers")
    .where("id", req.params.id)
    .then(customer => res.json(customer));
};

//Deletes a customer
exports.deleteCustomer = function(req, res) {
  knex("customers_tee_times")
    .del()
    .where("customer_id", req.params.id)
    .returning("*")
    .then(
      knex("customers")
        .del()
        .where("id", req.params.id)
        .returning("*")
        .then(updatedCustomers => res.json(updatedCustomers))
    );
};

//Updates a customers information
exports.updateCustomer = function(req, res) {
  knex("customers")
    .update({
      ...req.body
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedCustomers => res.json(updatedCustomers));
};

//Creates a new customer
exports.createNewCustomer = function(req, res) {
  knex("customers")
    .insert(req.body)
    .returning("*")
    .then(newCustomer => res.json(newCustomer));
};
