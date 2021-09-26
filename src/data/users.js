bids = require("../data/bids");

const users = [
    {
        "id" : 1,
        "email_address": "user1@gmail.com",
        "username": "user1",
        "password": "",
        "role": "admin",
        "list_of_bids": [1]
    },
    {
        "id" : 2,
        "email_address": "user2@gmail.com",
        "username": "user2",
        "password": "",
        "role": "user",
        "list_of_bids": [2]
    }
];

module.exports = users;