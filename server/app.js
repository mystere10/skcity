const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Not found routes
app.get("*", (request, response, next) => {
  response.status(404).send("Page not found");
});

module.exports = app;
