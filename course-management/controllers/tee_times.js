const knex = require("../db/knex");

exports.getAllTeeTimes = function(req, res) {
  knex("tee_times").then(tee_times => res.json(tee_times));
};

//Retrieves a single tee time from the customers_tee_times joined table.
exports.getOneTeeTime = function(req, res) {
  knex("customers_tee_times")
    .where("tee_time_id", req.params.id)
    .then(tee_time => res.json(tee_time));
};

//Deletes the tee time in the customers_tee_times table first, and then deletes the original tee time entry in tee_times table.
exports.deleteTeeTime = function(req, res) {
  knex("customers_tee_times")
    .del()
    .where("tee_time_id", req.params.id)
    .returning("*")
    .then(
      knex("tee_times")
        .del()
        .where("id", req.params.id)
        .returning("*")
        .then(updatedTeeTimes => res.json(updatedTeeTimes))
    );
};

//Updates the time of a specific tee time.
// exports.updateTeeTime = function(req, res) {
//   knex("tee_times")
//     .update({
//       ...req.body
//     })
//     .where("id", req.params.id)
//     .returning("*")
//     .then(updatedTeeTimes => res.json(updatedTeeTimes));
// };

//Updates the time of a specific tee time, deletes the old relationships in the join table, and the posts the new customers/tee times in the join table.
exports.updateTeeTime = function(req, res) {
  knex("tee_times")
    //Updates the time of the tee time.
    .update({
      time: req.body.time
    })
    .where("id", req.params.id)
    .returning("*")
    .then(teeTime => {
      //Deletes all the customers/tee times for this specific time from the joint table.
      knex("customers_tee_times")
        .del()
        .where("tee_time_id", req.params.id)
        .returning("*")
        .then(updatedTeeTime => {
          //Loops through the array of players and re-adds the customers/tee time to the join table.
          for (let i = 0; i < req.body.players.length; i++) {
            knex("customers_tee_times")
              .insert({
                customer_id: req.body.players[i],
                tee_time_id: req.params.id
              })
              .returning("*")
              .then();
          }
        });
    })
    .then(teeTime => res.json(teeTime));
};

exports.createNewTeeTime = function(req, res) {
  knex("tee_times")
    .insert({
      time: req.body.time
    })
    .returning("*")
    .then(newTeeTime => {
      for (let i = 0; i < req.body.players.length; i++) {
        knex("customers_tee_times")
          .insert({
            customer_id: req.body.players[i],
            tee_time_id: newTeeTime[0].id
          })
          .returning("*")
          .then();
      }
    })
    .then(newTeeTime => res.json(newTeeTime));
};
