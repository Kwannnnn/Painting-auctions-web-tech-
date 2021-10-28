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
                for (let user_id of painting.list_of_bidders) {
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
                    .json(bid)
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
    const user = req.user;

    const bid = bids.find(bid => bid.id == id);
    if (bid) {
        if (user.isAdmin || bid.user_id == user.id) {
            const bidder = users.find(user => user.id == bid.user_id);

            // delete bid id from user
            bidder.list_of_bids.splice(
                bidder.list_of_bids.findIndex(bid => bid.id == id), 1);

            // delete bid from bids list
            bids.splice(bids.indexOf(bid), 1);

            // update current price of painting
            const bidsOfPainting = bids.filter(b => b.painting_id == bid.painting_id);

            //find maximum amount among the bids and update painting
            const maxAmount = Math.max.apply(Math, bidsOfPainting.map(function(bid) { return bid.amount; }));

            const paintingToUpdate = paintings.find(painting => painting.id == bid.painting_id);
            paintings[paintings.indexOf(paintingToUpdate)].current_price = maxAmount;


            // if the bidder does not have any bids on the painting
            // update list of bidders for current painting
            if (!bidsOfPainting.find(bid => bid.user_id == bidder.id)) {
                paintingToUpdate.list_of_bidders.splice(paintingToUpdate.list_of_bidders.indexOf(bidder.id), 1);
            }
            res.json(bid);

        } else {
            res
                .status(StatusCodes.UNAUTHORIZED)
                .send(`You are not authorized to delete bid with id ${id}`);
        }
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`User with id ${id} cannot be found`);
    }
};