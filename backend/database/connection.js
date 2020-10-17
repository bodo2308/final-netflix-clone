const mysql = require("mysql2");

const pool = mysql.createPool(
  (configs = {
    host: "us-cdbr-east-02.cleardb.com",
    user: "b2c9755dc1a971",
    password: "e6ace79e",
    database: "heroku_8a046e74122b7cc",
  })
);

module.exports = pool.promise();
