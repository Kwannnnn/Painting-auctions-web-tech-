const {v4:uuidv4} = require('uuid');

const users = [
    {
        "id" : 1,
        "email_address": "quan1@gmail.com",
        "username": "quan1",
        "password": "$2a$10$oqXtGFROFR5qx8MNhsfV9.z7ERn5T5RFSSZpkefKrVLryMBdLpZSq", //quan123
        "secret": uuidv4(),
        "isAdmin": true,
        "list_of_bids": [1]
    },
    {
        "id" : 2,
        "email_address": "quan2@gmail.com",
        "username": "quan2",
        "password": "$2a$10$qgFIOHxoFvk9HhMmg2wDsOSVMF4DhJPHkKWdpUfqaHWRUPsAL3bGm", //quan456
        "isAdmin": false,
        "list_of_bids": [2]
    }
];

module.exports = users;