const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require("path");
const authRoutes = require("./routes/auth");

const mysql = require("mysql");
const dotenv = require("dotenv");

const User = require("./database/user");
const db = require("./database/connection");

dotenv.config({ path: "./.env" });

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

// var connection = mysql.createConnection(
//   "mysql://b2c9755dc1a971:e6ace79e@us-cdbr-east-02.cleardb.com/heroku_8a046e74122b7cc?reconnect=true"
// );
// connection.connect();

//Routes
app.get("/", (req, res, next) => {
  res.status(200).send("Welcome to Netflix Clone Project");
});

app.use("/auth", authRoutes);

app.listen(5000, async () => {
  //create database if it doesnt exist
  await db.execute("CREATE DATABASE IF NOT EXISTS heroku_8a046e74122b7cc");
  //use db created
  await db.query("USE heroku_8a046e74122b7cc");
  //create tables if they dont exist
  await User.createUserTable();
  console.log("Server is running on port 5000");
});
