const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const customersTeeTimesController = require("../controllers/customers_tee_times");

router.get("/", customersTeeTimesController.getAllCustomerTeeTimes);
// router.get("/:id", teeTimesController.getOneTeeTime);
// router.delete("/:id", teeTimesController.deleteTeeTime);
// router.patch("/:id", teeTimesController.updateTeeTime);
// router.post("/", teeTimesController.createNewTeeTime);

module.exports = router;
