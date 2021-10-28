const {StatusCodes} = require('http-status-codes');
const users = require('../data/users');

const jwt = require('jsonwebtoken')

const isLoggedIn = (req, res, next) => {
    console.log('Authentication time...loading');
    const token = getTokenFromRequest(req);

    if (token) {
        const payload = verifyToken(token);

        if (payload) {
            req.user = payload;
            return next();
        }
    }

    res.status(StatusCodes.UNAUTHORIZED).send('Something is wrong with your credentials');
};

const getTokenFromRequest = (req) => {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        return authHeader.split(' ')[1];
    }
};

const verifyToken = (token) => {
    try {
        const tokenPayload = jwt.decode(token);
        console.log('user payload', tokenPayload);
        if (tokenPayload) {
            const user = users.find((user) => user.email_address === tokenPayload.email_address);
            return jwt.verify(token, user.secret);
        }
    } catch (e) {
        return false;
    }
};

module.exports = isLoggedIn;