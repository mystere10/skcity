const chai = require("chai");
const faker = require("faker");
const path = require("path");
const app = require(path.resolve("app"));
const request = require("supertest")(app);
const ProductModel = require("../models/Product");

const { expect } = chai;

const API = {
  GET_SNEAKERS: "/api/v1/sneakers",
  GET_SNEAKER: "/api/v1/sneaker",
  POST_SNEAKER: "/api/v1/sneaker",
};

describe(`API Sneaker City Integration Tests`, async () => {
  it("Should respond with 200 OK if Sneaker was found", async () => {
    return request.get(API.GET_SNEAKERS).expect((response) => {
      expect(response.status).to.be.equals(200);
      expect(response.body[0]).to.have.property("brandName");
    });
  });

  it("Should respond with 201 Created if Sneaker was created", async () => {
    const sizes = JSON.stringify([
      { size: 35, quantity: "30 pairs" },
      { size: 36, quantity: "30 pairs" },
      { size: 38, quantity: "30 pairs" },
      { size: 39, quantity: "30 pairs" },
      { size: 40, quantity: "30 pairs" },
      { size: 41, quantity: "30 pairs" },
      { size: 42, quantity: "30 pairs" },
    ]);
    const sneaker = {
      brandName: "Nike",
      model: "Air Force one",
      price: "$170",
      releaseDate: "2021-06-16",
      sizes,
    };
    return await request
      .post(API.POST_SNEAKER)
      .send(sneaker)
      .expect((response) => {
        expect(response.status).to.be.equals(201);
        expect(response.body).to.have.property("model").eq("Air Force one");
      });
  });

  it("Should respond with 200 OK if Sneaker a sneaker with specific id was found was found", async () => {
    const sneaker = await request.get(API.GET_SNEAKERS);
    return await request
      .get(`${API.GET_SNEAKER}/${sneaker.body[0].id}`)
      .expect((response) => {
        expect(response.status).to.be.equals(200);
        expect(response.body[0]).to.have.property("brandName");
      });
  });
});

describe("Sneaker City Unit Test", () => {
  const sneaker = {
    brandName: "Nike",
    model: "Air Force one",
    price: "$170",
    releaseDate: "2021-06-16",
  };
  it("Should create a new Sneaker", () => {
    const product = new ProductModel(sneaker);
    expect(product).to.have.property("brandName");
  });
  it("Should get all Sneakers", () => {
    const product = ProductModel.fetchOneSneaker();
    expect(ProductModel.fetchOneSneaker()).to.be.an("array");
  });
});
