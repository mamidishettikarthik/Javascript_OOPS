"use strict";
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Nanigoud@777",
  DB: "api",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};