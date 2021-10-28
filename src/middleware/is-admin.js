const { StatusCodes } = require('http-status-codes');

// check if user is admin
const isAdmin = (req, res, next) => {
  if(req.user.isAdmin){
      return next();

  }
  res.status(StatusCodes.UNAUTHORIZED).send('You need to be admin to do this');

};

module.exports = isAdmin;