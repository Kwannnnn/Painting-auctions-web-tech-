const express = require('express');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const users = require('../data/users');
const bcrypt = require('bcrypt');

const router = express.Router();

const login = (email_address, password) => {
    const user = users.find((user) => {
        return user.email_address === email_address
    });
    if(user){
        const result = bcrypt.compareSync(password, user.password);
        if(result){
            return jwt.sign({
                email_address: user.email_address,
                isAdmin: user.isAdmin
            }, user.secret);
        }
    }
    return false;
}

router.post('', (req, res) => {
    const { email_address, password } = req.body;

    if(email_address && password){
        const token = login(email_address, password);
        if(token){
            res.send({ token: token })
        }else{
            res.status(StatusCodes.UNAUTHORIZED).send('Email address and/or password are incorrect');
        }
    }else{
        res.status(StatusCodes.BAD_REQUEST).send('Email address or password missing');
    }
});

module.exports = router;