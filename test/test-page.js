"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server.js");
const app2 = require("../public/app.js")

const expect = chai.expect;

chai.use(chaiHttp);

describe("initial page", function() {
  it("should be here", function() {
    return chai
      .request(app)
      .get("/")
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});

describe("gif info", function() {
  it("should be returned", function() {
    return chai
      .request(app2)
      .get("/")
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});