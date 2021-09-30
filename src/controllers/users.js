const users = require("../data/users");
const {StatusCodes} = require("http-status-codes");
const paintings = require("../data/paintings");
const bids = require("../data/bids");
const {v4:uuidv4} = require('uuid');
const bcrypt = require('bcrypt');

const saltRounds = 10;


exports.getUsers = (req, res) => {
    const filters = req.query;
    let result;

    result = users.filter(user => {
        let isMatched = true;
        for (let key in filters) {
            isMatched = isMatched && (JSON.parse(filters[key]) == user[key]);
        }
        return isMatched;
    });

    res.json(result);
    // res.json(result.map(sanitizeUser));
};

exports.getOneUser = (req, res) => {
    const {id} = req.params;

    const user = users.find(user => user.id == id);
    if (user) {
        res.json(sanitizeUser(user));
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`User with id ${id} cannot be found`)
    }
};

exports.addUser = async (req, res) => {
    const user = req.body;

    //get the latest id and add 1
    //if list is empty, set id to 1
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const passwordHash = await bcrypt
        .genSalt(saltRounds)
        .then(salt => {
            return bcrypt.hash(user.password, salt);
        })
        .catch(err => console.error(err.message));

    const completedUser = {...user,
        id: id,
        list_of_bids: [],
        password: passwordHash,
        secret: uuidv4()
    };

    users.push(completedUser);

    res
        .status(StatusCodes.CREATED)
        // .json(sanitizeUser(completedUser));
        .json(completedUser);
}

exports.updateUser = (req, res) => {
    const user = req.body;
    const {id} = req.params;

    //check if ids match
    if (user.id == id) {
        const indexUserToEdit = users.findIndex(user => user.id == id);

        // check if user exists
        if (indexUserToEdit == -1) {
            res
                .status(StatusCodes.NOT_FOUND)
                .send(`User with id ${id} cannot be found`);
        } else {
            users[indexUserToEdit].username = user.username;
            users[indexUserToEdit].email_address = user.email_address;
            // issue with updating roles
            users[indexUserToEdit].roles = user.roles;

            res.json(users[indexUserToEdit]);
        }
    } else {
        res
            .status(StatusCodes.BAD_REQUEST)
            .send(`Ids do not match`);
    }
};

exports.deleteUser = (req, res) => {
    const {id} = req.params;

    const user = users.find(user => user.id == id);
    if (user) {
        users.splice(users.indexOf(user), 1);

        // delete given user id from every painting
        for (let painting of paintings) {
            const index = painting.list_of_bidders.findIndex(user_id => user_id == id);

            if (index == -1) continue;

            painting.list_of_bidders.splice(index, 1);
        }

        // delete every bid with given user id
        for (let i = 0; i < bids.length; i++) {
            const bid = bids[i];
            if (bid.user_id == id) {
                bids.splice(bids.indexOf(bid), 1);
                i = -1;
            }
        }

        res.json(user);
    } else {
        res
            .status(StatusCodes.NOT_FOUND)
            .send(`User with id ${id} cannot be found`);
    }
};

const sanitizeUser = (user) => {
    const {password, secret, ...result} = user;
    return result;
}