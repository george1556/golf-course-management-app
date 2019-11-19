const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");
const knex = require("./db/knex");

const teeTimes = require("./routes/teeTimeRoutes");
const customers = require("./routes/customerRoutes");
const customersTeeTimes = require("./routes/customersTeeTimesRoutes");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/teetimes", teeTimes);
app.use("/customersteetimes", customersTeeTimes);
app.use("/customers", customers);

// module.exports = { app };
app.listen(8000, function() {
  console.log("listening on port: ", port);
});
