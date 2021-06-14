const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const ProductRouter = require("./routers/product");

const app = express();
app.use(cors());
app.use(helmet());
app.use("/", express.static(path.join(__dirname, "/")));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

//Routers
app.use("/api/v1", ProductRouter);

// Not found routes
app.get("*", (request, response, next) => {
  response.status(404).send("Page not found");
});

module.exports = app;
