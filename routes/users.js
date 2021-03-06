const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with min 6 characters").isLength(
      {
        min: 6
      }
    )
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('passed')
  }
);

module.exports = router;
