const { StatusCodes } = require('http-status-codes');
const users = require('../data/users');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const isLoggedIn = (res, req, next) =>{
    console.log('Authentication time...loading');
    const token = getTokenFromRequest(req);

    if (token){
        const payload = verifyToken(token)
    }

    res.status(StatusCodes.UNAUTHORIZED).send('Somethings wrong.. I can feel it');
};

const getTokenFromRequest = (req) => {
    const authHeader = req.headers['authorization'];

    if(authHeader){
        return authHeader.split(' ')[1];
    }
};

const verifyToken = (token) => {
    const tokenPayload = jwt.decode(token);
    console.log('user payload', tokenPayload);
    if(tokenPayload){
        const user = users.find((user) =>
            user.username=== tokenPayload.username);
    }
};

module.exports=isLoggedIn;