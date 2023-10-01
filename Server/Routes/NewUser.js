const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");
router.post(
  "/newuser",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("name").isLength({ min: 5 }).withMessage("Name must be at least 5 characters"),
    body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false, error: "An error occurred" });
    }
  }
);

// LOGIN USER

router.post(
  "/loginuser",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").isLength({ min: 5 }).withMessage("Incorrect password"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const userData = await User.findOne({ email });

      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try Login With Correct Credentials" });
      }

      if (password !== userData.password) {
        return res
          .status(400)
          .json({ errors: "Try Login With Correct Credentials" });
      } else {
        return res.json({ success: true, message: "Login successful", user: userData });
      }
    } catch (error) {
      console.error(error);
      res.json({ success: false, error: "An error occurred" });
    }
  }
);


module.exports = router;
