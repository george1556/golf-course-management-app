const { Model } = require("objection");

class TeeTime extends Model {
  static get tableName() {
    return "teetimes";
  }

  static get relationMappings() {
    const Customer = require("../customers/model");
    return {
      customers: {
        relation: Model.ManyToManyRelation,
        modelClass: Customer,
        join: {
          from: "teetimes.id",
          through: {
            // customers_teetimes is the join table.
            from: "customers_teetimes.teetime_id",
            to: "customers_teetimes.customer_id"
          },
          to: "customers.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["time"],

      properties: {
        id: { type: "integer" },
        time: { type: "string" }
      }
    };
  }
}

module.exports = TeeTime;
