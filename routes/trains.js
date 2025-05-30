const express = require("express");
const { body, query } = require("express-validator");
const { createTrain, availability } = require("../controllers/train");
const { requireApiKey, requireAuth } = require("../middlewares/authMiddleware");
const { validate } = require("../middlewares/validate");
const router = express.Router();

router.post(
  "/",
  requireApiKey,
  requireAuth,
  validate([
    body("name").isString(),
    body("source").isString(),
    body("destination").isString(),
    body("totalSeats").isInt({ min: 1 }),
  ]),
  createTrain
);


router.get(
  "/availability",
  validate([query("source").isString(), query("destination").isString()]),
  availability
);

module.exports = router;
