const paintings = require("../data/paintings");
const {StatusCodes} = require("http-status-codes");


exports.getPaintings = (req, res) => {
    const filters = req.query;
    let result;

    result = paintings.filter(painting => {
        let isMatched = true;
        for (let key in filters) {
            isMatched = isMatched && (JSON.parse(filters[key]) == painting[key]);
        }
        return isMatched;
    });

    res.json(result);
};

exports.getOnePainting = (req, res) => {
    const { id } = req.params;

    const painting = paintings.find(painting => painting.id == id);
    if (painting) {
        res.json(painting);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`Painting with id ${id} cannot be found`)
    }
};

exports.addPainting = (req, res) => {
    const painting = req.body;
    // const painting = req.body;

    //get the latest id and add 1
    //if list is empty, set id to 1
    const id = paintings.length > 0 ? paintings[paintings.length-1].id + 1 : 1;
    const paintingWithId = {...painting, id: id, is_sold: false, list_of_bidders: []};

    paintings.push(paintingWithId);

    res
        .status(StatusCodes.CREATED)
        .json(paintingWithId);
}

exports.updatePainting = (req, res) => {
    const painting = req.body;
    const { id } = req.params;

    //check if ids match
    if (painting.id == id) {
        const indexPaintingToEdit = paintings.findIndex(painting => painting.id == id);

        // check if painting exists
        if (indexPaintingToEdit) {
            paintings[indexPaintingToEdit] = painting;

            res.json(paintings[indexPaintingToEdit]);
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
};

exports.deletePainting = (req, res) => {
    const { id } = req.params;

    const painting = paintings.find(painting => painting.id == id);
    if (painting) {
        paintings.splice(paintings.indexOf(painting), 1);

        res.json(painting);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`Painting with id ${id} cannot be found`);
    }
};