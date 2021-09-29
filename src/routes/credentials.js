const express = require('express');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const users = require('../data/users');
const bcrypt = require('bcrypt');

const router = express.Router();

const login = (username, password) => {
    const user = users.find((user) => {
        return user.username === username;
    });
    if(user){
        const result = bcrypt.compareSync(password, user.password);
        if(result){
            return jwt.sign({
                username: user.username,
                roles: user.roles
            }, user.secret);
        }
    }
    return false;
}

router.post('', (req, res) => {
    const { username, password } = req.body;

    if(username && password){
        const token = login(username, password);
        if(token){
            res.send({ token: token })
        }else{
            res.status(StatusCodes.UNAUTHORIZED).send('Username and/or password are incorrect');
        }
    }else{
        res.status(StatusCodes.BAD_REQUEST).send('username or password missing');
    }
});

module.exports = router;