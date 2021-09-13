const express = require("express");
const { StatusCodes } = require('http-status-codes');
const router = express.Router();

router.get('../paintings.json', (req , res) => {
    res.send("this is supposed to be a list of all paintings");
    res.status(StatusCodes.OK);
});

module.exports = router;