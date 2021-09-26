const bids = require("../data/bids");
const {StatusCodes} = require("http-status-codes");
const users = require("../data/users");
const paintings = require("../data/paintings");

exports.getBids = (req, res) => {
    const filters = req.query;
    let result;

    result = bids.filter(bid => {
        let isMatched = true;
        for (let key in filters) {
            isMatched = isMatched && (JSON.parse(filters[key]) == bid[key]);
        }
        return isMatched;
    });

    res.json(result);
};

exports.getOneBid = (req, res) => {
    const {id} = req.params;

    const bid = bids.find(bid => bid.id == id);
    if (bid) {
        res.json(bid);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`Bid with id ${id} cannot be found`)
    }
};

exports.addBid = (req, res) => {
    const bid = req.body;

    const user = users.find(user => user.id == bid.user_id);

    //check if user id in the body is valid
    if (user) {
        const painting = paintings.find(painting => painting.id == bid.painting_id);
        //check if painting id in the body is valid
        if (painting) {
            // check if the bid amount if greater than the current price
            if (bid.amount > painting.current_price) {
                //get the latest id and add 1
                //if list is empty, set id to 1
                const id = bids.length > 0 ? bids[bids.length - 1].id + 1 : 1;
                const bidWithId = {...bid, id: id};

                bids.push(bidWithId);
                user.list_of_bids.push(id);

                // check if user id already exists in the list of bidders of the painting
                let isMatched = false;
                for (let user_id of painting.list_of_bidders){
                    if (user_id == bid.user_id) isMatched = true;
                }
                if (!isMatched) painting.list_of_bidders.push(user.id);

                //update current price
                paintings[paintings.indexOf(painting)].current_price = bid.amount;

                res
                    .status(StatusCodes.CREATED)
                    .json(bidWithId);
            } else {
                res.status(StatusCodes.BAD_REQUEST)
                    .send("Bid amount must be greater than the current price")
            }

        } else {
            res
                .status(StatusCodes.NOT_FOUND)
                .send(`Painting with id ${bid.painting_id} cannot be found`)
        }
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`User with id ${bid.user_id} cannot be found`)
    }

};

exports.deleteBid = (req, res) => {
    const {id} = req.params;

    const bid = bids.find(bid => bid.id == id);
    if (bid) {
        bids.splice(bids.indexOf(bid), 1);
        // delete bid id from every user
        const bidders = users.filter(user => user.id == bid.user_id);
        for (let bidder of bidders) {
            bidder.list_of_bids.splice(
                bidder.list_of_bids.findIndex(bid => bid.id == id), 1);
        }

        res.json([bid, bidders]);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`Bid with id ${id} cannot be found`);
    }
};