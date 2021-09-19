// import { v4 as uuidv4 } from 'uuid';

const express = require('express');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();
const paintings = require('../data/paintings');

router.get("", (req, res) => {
    res.send(paintings);
});

router.get("/:id", (req, res) => {
   const { id } = req.params;

   const painting = paintings.find(painting => painting.id === id);
   if (!painting) {
       res
           .status(StatusCodes.NOT_FOUND)
           .send(`Painting with id ${id} cannot be found`)
   } else {
       res.send(painting);
   }
});

router.post("", (req, res) => {
    const painting = req.body;


    const paintingWithId = {...painting, id: uuidv4()};

    paintings.push(paintingWithId);

    res
        .status(StatusCodes.CREATED)
        .send(`Painting with the name ${paintingWithId.name} added to the database`);
});

router.put("", (req, res) => {

});

router.delete("/:id", (req, res) => {

});


module.exports = router;

