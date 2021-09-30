const {v4:uuidv4} = require('uuid');

const users = [
    {
        id: 1,
        username : "test1",
        email_address : "test@test.com",
        password : "$2a$10$g9BMcG1QnNDL5TmcU5a.RedeuoGGi7AfFYAgherrMcaj38jN8E7s2", //pass1
        secret : uuidv4(),
        roles : ['admin', 'user'],
        list_of_bids: [1]
    },
    {
        id: 2,
        username : "test2",
        email_address : "test2@test.com",
        password : "$2a$10$79Q/Lc1A8ZYz/xFEkrEJ9eCMLWcOPG2N4DXhkTttGfDFjMuwr7PKS", //pass2
        secret : uuidv4(),
        roles : ['user'],
        list_of_bids: [2]
    },
    {
        id: 3,
        username : "test3",
        email_address : "test3@test.com",
        password : "$2a$10$hCrIYI0QVzXlfClbs47rw.PTFhC6.EhBoawXaGiPOwt6nCvRgsN7C", //pass3
        secret : uuidv4(),
        roles : ['user'],
        list_of_bids: []
    },
    {
        id: 4,
        username : "test4",
        email_address : "test4@test.com",
        password : "$2a$10$qD5a2kdkMhTFT/93IbteQuRJTnBrOmweWRPHhlQnyzJser2wcg9wW", //pass4
        secret : uuidv4(),
        roles : ['user'],
        list_of_bids: []
    },
    {
        id: 5,
        username : "test5",
        email_address : "test5@test.com",
        password : "$2a$10$3i3eVgCzroGaa05PfYel6e.TSMyW3EMmPCPoqO2hkcrEylneO8fFC", //pass5
        secret : uuidv4(),
        roles : ['user'],
        list_of_bids: [0]
    }
];

module.exports = users;