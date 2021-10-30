const {v4:uuidv4} = require('uuid');

const users = [
    {
        id: 1,
        username : "test1",
        email_address : "test1@test.com",
        password : "$2a$10$UJoC9VTbgAxeN6E8b/DzQ.O/bKPBjfikhHwZOONhV0/NWBClazDu6", //@Password1
        secret : uuidv4(),
        isAdmin: true,
        list_of_bids: [1]
    },
    {
        id: 2,
        username : "test2",
        email_address : "test2@test.com",
        password : "$2a$10$ualu4YVjfKPaGTvQxNPrt.FBuJa07yBC8LAgGC3LHIMD9XX3nOQyS", //@Password2
        secret : uuidv4(),
        isAdmin: false,
        list_of_bids: [3]
    },
    {
        id: 3,
        username : "test3",
        email_address : "test3@test.com",
        password : "$2a$10$/8r2CRsIuEeiAtNTm2WgNu74aolocegLvoyu5ZB40yOTot.yWNRp2", //@Password3
        secret : uuidv4(),
        isAdmin: true,
        list_of_bids: [1]
    },
    {
        id: 4,
        username : "test4",
        email_address : "test4@test.com",
        password : "$2a$10$iqYj3vN83M.SeTWJGe0RQuolS/curr9MZpNmxF/1UTboAv..T08q.", //@Password4
        secret : uuidv4(),
        isAdmin: true,
        list_of_bids: [1]
    },
    {
        id: 5,
        username : "test5",
        email_address : "test5@test.com",
        password : "$2a$10$PYTda7dprhqwk08fwxRvSeV8r/6wF2Abc9/M4VczlsTFbiwvResMS", //@Password5
        secret : uuidv4(),
        isAdmin: false,
        list_of_bids: [0]
    }
];

module.exports = users;