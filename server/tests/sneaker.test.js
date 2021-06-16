const chai = require("chai");
const faker = require("faker");
const path = require("path");
const app = require(path.resolve("app"));
const request = require("supertest")(app);

const { expect } = chai;

const API = {
  GET_SNEAKERS: process.env.API + "/sneakers",
  GET_SNEAKER: process.env.API + "/sneaker/:id",
  POST_SNEAKER: process.env.API + "/sneaker",
};

describe("Sneaker City PI test", () => {
  //   describe(`GET ${API.GET_SNEAKERS}`, () => {
  //     it("Should respond with 404 Not found if no Sneaker was found", async () => {
  //       return request.get(API.GET_SNEAKERS).expect((response) => {
  //         expect(response.status).to.be.equals(404);
  //       });
  //     });
  //   });
});
