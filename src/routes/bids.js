const express = require('express');
const router = express.Router();
const controller = require('../controllers/bids');
const {validateResult, bidValidators} = require("../middleware/validate-input");
const isLoggedIn = require("../middleware/is-logged-in");
const isAdmin = require("../middleware/is-admin");


router.get("", controller.getBids);

router.get("/:id", controller.getOneBid);

router.post("", isLoggedIn, bidValidators, validateResult, controller.addBid);

router.delete("/:id", isLoggedIn, isAdmin, controller.deleteBid);


module.exports = router;