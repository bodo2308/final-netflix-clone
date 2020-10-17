const User = require("../database/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  //check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      error: errors.array()[0].msg,
    });
  }

  let loggedInUser;
  // find user in database
  User.findUserByEmail(email)
    .then((user) => {
      //if we don't find a email, user doesn't exist
      const foundUserData = JSON.parse(JSON.stringify(user[0]))[0];

      if (!foundUserData) {
        return res.json({ error: "User Not Found" });
      }
      loggedInUser = foundUserData;
      //if we do find email, check password from request with password in database for user
      return bcrypt.compare(password, foundUserData.password);
    })
    .then((doMatch) => {
      //if passwords do match
      if (doMatch) {
        token = jwt.sign(
          {
            email: email,
          },
          "authSecret"
        );
        res
          .status(201)

          .json({
            token: token,
            email: email,
            success: "User Successfully Logged In",
          });
      } else {
        //if passwords don't match
        res.json({ error: "Passwords dont match" });
      }
    })
    .catch((err) => console.log(err));
};

exports.register = (req, res) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);

  //if there are errors in input
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.json({
      error: errors.array()[0].msg,
    });
  }

  //hash password
  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      /* add user to DB */
      return User.saveUser(firstName, lastName, email, hashedPassword);
    })
    .then((result) => {
      token = jwt.sign(
        {
          email: email,
        },
        "authSecret"
      );
      res
        .status(201)

        .json({
          token: token,
          email: email,
          success: "User Created",
          result: result,
        });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: "Error saving user" });
    });
};
