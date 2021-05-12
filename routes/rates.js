const express = require("express");

const { getRates, postRates } = require("../controllers/rates");

const router = express.Router();

router.get("/", getRates);

router.post("/", postRates);

module.exports = router;
