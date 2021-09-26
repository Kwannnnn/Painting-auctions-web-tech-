const express = require('express');
const router = express.Router();
const controller = require("../controllers/users");
const {userValidators, validateResult} = require("../middleware/validate-input");

router.get("", controller.getUsers);

router.get("/:id", controller.getOneUser);

router.post("", userValidators, validateResult, controller.addUser);

router.put("/:id", userValidators, validateResult, controller.updateUser);

router.delete("/:id", controller.deleteUser);


module.exports = router;
