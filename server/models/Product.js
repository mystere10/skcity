const { generateUID } = require("../helpers/ProductFormatter");
const sneakers = require("../data/mockData");

module.exports = class Product {
  constructor(brandName, model, price, picture, releaseDate, sizes) {
    this.brandName = brandName;
    this.model = model;
    this.price = price;
    this.picture = picture;
    this.releaseDate = releaseDate;
    this.sizes = sizes;
  }

  create() {
    sneakers.push({ id: generateUID(), timestamp: Date.now(), ...this });
    return this;
  }

  static fetchSneakers() {
    return sneakers;
  }

  static fetchOneSneaker(id) {
    const sneaker = sneakers.filter((sneaker) => sneaker.id === id);
    return sneaker;
  }
};
