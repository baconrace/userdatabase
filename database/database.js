const mysql = require("mysql2/promise");
require("dotenv").config();

async function createConnection() {
  return mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
}

module.exports = { createConnection };
