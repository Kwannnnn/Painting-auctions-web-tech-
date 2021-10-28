const express = require('express');
const router = express.Router();
const controller = require("../controllers/users");
const {userValidators, validateResult} = require("../middleware/validate-input");
const isLoggedIn = require("../middleware/is-logged-in");
const isAdmin = require("../middleware/is-admin");

router.get("", controller.getUsers);

router.get("/:id", controller.getOneUser);

router.post("", userValidators, validateResult, controller.addUser);

router.put("/:id", isLoggedIn, isAdmin, userValidators, validateResult, controller.updateUser);

router.delete("/:id", isLoggedIn, isAdmin, controller.deleteUser);


module.exports = router;
