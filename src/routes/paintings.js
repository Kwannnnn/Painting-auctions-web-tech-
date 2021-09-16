const express = require('express');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();
const paintings = require('../data/paintings');

router.get("", (req, res) => {
    res.send(paintings);
});

module.exports = router;

