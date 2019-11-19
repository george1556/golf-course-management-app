const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const teeTimesController = require("../controllers/tee_times");

router.get("/", teeTimesController.getAllTeeTimes);
router.get("/:id", teeTimesController.getOneTeeTime);
router.delete("/:id", teeTimesController.deleteTeeTime);
router.patch("/:id", teeTimesController.updateTeeTime);
router.post("/", teeTimesController.createNewTeeTime);

module.exports = router;
