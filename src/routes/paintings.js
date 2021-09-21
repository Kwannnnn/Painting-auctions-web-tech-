const express = require('express');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();
const paintings = require('../data/paintings');

router.get("", (req, res) => {
    const filters = req.query;
    let result;

    if (filters.length === 0) {
        result = paintings;
    } else {
        result = paintings.filter(painting => {
            let isMatched = true;
            for (let key in filters) {
                isMatched = isMatched && (filters[key] === painting[key])
            }
            return isMatched;
        });
    }

    res.send(result);
});

router.get("/:id", (req, res) => {
   const { id } = req.params;

   const painting = paintings.find(painting => painting.id == id);
   if (painting) {
       res.send(painting);
   } else {
       res
           .status(StatusCodes.NOT_FOUND)
           .send(`Painting with id ${id} cannot be found`)
   }
});

router.post("", (req, res) => {
    const painting = req.body;

    //get the latest id and add 1
    //if list is empty, set id to 1
    const id = paintings.length > 0 ? paintings[paintings.length-1].id + 1 : 1;
    const paintingWithId = {...painting, id: id};

    paintings.push(paintingWithId);

    res
        .status(StatusCodes.CREATED)
        .send(paintingWithId);
});

router.put("/:id", (req, res) => {
    const painting = req.body;
    const { id } = req.params;

    //check if ids match
    if (painting.id == id) {
        const paintingToEdit = paintings.find(painting => painting.id == id);

        // check if painting exists
        if (paintingToEdit) {
            paintingToEdit.name = painting.name;
            //todo add more fields

            res.send(painting);
        } else {
            res
                .status(StatusCodes.NOT_FOUND)
                .send(`Painting with id ${id} cannot be found`);
        }
    } else {
        res
            .status(StatusCodes.BAD_REQUEST)
            .send(`Ids do not match`);
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    const painting = paintings.find(painting => painting.id == id);
    if (painting) {
        paintings.splice(paintings.indexOf(painting), 1);

        res.send(painting);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`Painting with id ${id} cannot be found`);
    }
});


module.exports = router;

