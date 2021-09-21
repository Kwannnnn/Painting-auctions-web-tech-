const express = require('express');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();
const bids = require('../data/bids');

router.get("", (req, res) => {
    res.send(bids);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    const bid = bids.find(bid => bid.id == id);
    if (bid) {
        res.send(bid);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`Bid with id ${id} cannot be found`)
    }
});

router.post("", (req, res) => {
    const bid = req.body;

    //get the latest id and add 1
    //if list is empty, set id to 1
    const id = bids.length > 0 ? bids[bids.length-1].id + 1 : 1;
    const bidWithId = {...bid, id: id};

    bids.push(bidWithId);

    res
        .status(StatusCodes.CREATED)
        .send(bidWithId);
});

router.put("/:id", (req, res) => {
    const bid = req.body;
    const { id } = req.params;

    //check if ids match
    if (bid.id == id) {
        const bidToEdit = bids.find(bid => bid.id == id);

        // check if painting exists
        if (bidToEdit) {
            bidToEdit.name = bid.name;
            //todo add more fields

            res.send(bid);
        } else {
            res
                .status(StatusCodes.NOT_FOUND)
                .send(`Bid with id ${id} cannot be found`);
        }
    } else {
        res
            .status(StatusCodes.BAD_REQUEST)
            .send(`Ids do not match`);
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    const bid = bids.find(bid => bid.id == id);
    if (bid) {
        bids.splice(bids.indexOf(bid), 1);

        res.send(bid);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`Bid with id ${id} cannot be found`);
    }
});


module.exports = router;