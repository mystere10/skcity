const moment = require("moment");
const path = require("path");
const Product = require("../models/Product");
const dotenv = require("dotenv");
const { FormatCreateProduct } = require("../helpers/ProductFormatter");

dotenv.config();

const __basedir = path.resolve(path.dirname(""));

exports.createProduct = (request, response, next) => {
  console.log(request.body);
  try {
    const { brandName, model, price, releaseDate } = FormatCreateProduct(
      request.body,
      ["brandName", "model", "price", "releaseDate"]
    );

    const sizes = JSON.parse(request.body.sizes);

    let location =
      process.env.API_SERVER +
      "/assets/products/images/" +
      request.file.filename;
    if (!moment(releaseDate, "YYYY-MM-DD", true).isValid())
      throw { name: "Invalid date", path: "releaseDate" };
    const newProduct = new Product(
      brandName,
      model,
      price,
      location,
      releaseDate,
      sizes
    );

    const product = newProduct.create();
    response.send(product);
  } catch (error) {
    console.log(error);
    return response.send({ status: 400, response: error });
  }
};

exports.getAllSneakers = (request, response, next) => {
  const sneakers = Product.fetchSneakers();
  const topTenSneakers = sneakers.filter((sneaker, index) => {
    if (index < 10) return sneaker;
  });
  response.send(topTenSneakers);
};

exports.getOneSneaker = (request, response, next) => {
  const { id } = request.params;
  const sneaker = Product.fetchOneSneaker(id);
  response.send(sneaker);
};
