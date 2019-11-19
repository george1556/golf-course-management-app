const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const customersController = require("../controllers/customers");

router.get("/", customersController.getAllCustomers);
router.get("/:id", customersController.getOneCustomer);
router.delete("/:id", customersController.deleteCustomer);
router.patch("/:id", customersController.updateCustomer);
router.post("/", customersController.createNewCustomer);

module.exports = router;
