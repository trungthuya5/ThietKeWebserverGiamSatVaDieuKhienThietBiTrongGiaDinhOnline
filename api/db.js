'use strict'

const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "nhdie_thuynt",
//   password: process.env.DB_PASSWORD || "Misg64~5",
//   database: process.env.DB_NAME || "nhdie6px_dktt"
// });

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "doantotnghiep"
});

db.connect()
module.exports = db
