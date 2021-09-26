const express = require('express');
const router = express.Router();
const {paintingValidators, validateResult} = require("../middleware/validate-input");
const controller = require('../controllers/paintings');


router.get("", controller.getPaintings);

router.get("/:id", controller.getOnePainting);

router.post("", paintingValidators, validateResult, controller.addPainting);

router.put("/:id", paintingValidators, validateResult, controller.updatePainting);

router.delete("/:id", controller.deletePainting);


module.exports = router;

