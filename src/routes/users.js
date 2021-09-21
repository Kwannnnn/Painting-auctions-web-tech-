const express = require('express');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();
const users = require('../data/users');
const paintings = require("../data/paintings");

router.get("", (req, res) => {
    res.send(users);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    const user = users.find(user => user.id == id);
    if (user) {
        res.send(user);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`User with id ${id} cannot be found`)
    }
});

router.post("", (req, res) => {
    const user = req.body;

    //get the latest id and add 1
    //if list is empty, set id to 1
    const id = users.length > 0 ? users[users.length-1].id + 1 : 1;
    const userWithId = {...user, id: id};

    users.push(userWithId);

    res
        .status(StatusCodes.CREATED)
        .send(userWithId);
});

router.put("/:id", (req, res) => {
    const user = req.body;
    const { id } = req.params;

    //check if ids match
    if (user.id == id) {
        const userToEdit = users.find(user => user.id == id);

        // check if painting exists
        if (userToEdit) {
            userToEdit.name = user.name;
            //todo add more fields

            res.send(user);
        } else {
            res
                .status(StatusCodes.NOT_FOUND)
                .send(`User with id ${id} cannot be found`);
        }
    } else {
        res
            .status(StatusCodes.BAD_REQUEST)
            .send(`Ids do not match`);
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    const user = users.find(bid => bid.id == id);
    if (user) {
        users.splice(users.indexOf(user), 1);

        res.send(user);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`User with id ${id} cannot be found`);
    }
});


module.exports = router;
