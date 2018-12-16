"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Activation",
    embedded: false
  },
  {
    name: "Bracelet",
    embedded: false
  },
  {
    name: "Check",
    embedded: false
  },
  {
    name: "Checkpoint",
    embedded: false
  },
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://${process.env["PRISMA_HOST"]}:4466/${
    process.env["PRISMA_SERVICE"]
  }/${process.env["PRISMA_STAGE"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Activation",
    embedded: false
  },
  {
    name: "Bracelet",
    embedded: false
  },
  {
    name: "Check",
    embedded: false
  },
  {
    name: "Checkpoint",
    embedded: false
  },
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
