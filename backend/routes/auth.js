const express = require("express");
const authController = require("../controllers/auth");
const { check } = require("express-validator");
const router = express.Router();
const User = require("../database/user");
const auth = require("../middleware/auth");

router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Enter a valid email"),
    check("password", "Invalid Password").isLength({
      min: 1,
    }),
  ],
  authController.login
);

router.post(
  "/register",
  [
    check("email")
      .isEmail()
      .withMessage("Enter a valid email")
      .isLength({
        min: 1,
      })
      .normalizeEmail()
      //no duplicate emails
      .custom((value, { req }) => {
        return User.findUserByEmail(value).then((user) => {
          //if email exists in system, send error
          if (user[0].length > 0) {
            return Promise.reject("Email already exists");
          }
        });
      }),
    check("password", "Invalid Password").isLength({
      min: 1,
    }),
  ],
  authController.register
);

router.get("/user", auth, (req, res) => {
  User.findUserByEmail(req.user.email).then((user) => {
    //if we don't find a email, user doesn't exist
    const foundUserData = JSON.parse(JSON.stringify(user[0]))[0];
    res.json(foundUserData);
  });
});

module.exports = router;
