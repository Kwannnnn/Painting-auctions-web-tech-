const express = require('express');
const router = express.Router();
const {paintingValidators, validateResult} = require("../middleware/validate-input");
const isLoggedIn = require("../middleware/is-logged-in");
const isAdmin = require("../middleware/is-admin")
const controller = require('../controllers/paintings');


router.get("", controller.getPaintings);

router.get("/:id", controller.getOnePainting);

router.post("",isLoggedIn, isAdmin, paintingValidators, validateResult, controller.addPainting);

router.put("/:id",isLoggedIn, isAdmin, paintingValidators, validateResult, controller.updatePainting);

router.delete("/:id",isLoggedIn, isAdmin, controller.deletePainting);


module.exports = router;

