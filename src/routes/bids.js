const express = require('express');
const router = express.Router();
const controller = require('../controllers/bids');
const {validateResult, bidValidators} = require("../middleware/validate-input");


router.get("", controller.getBids);

router.get("/:id", controller.getOneBid);

router.post("", bidValidators, validateResult, controller.addBid);

router.delete("/:id", controller.deleteBid);


module.exports = router;