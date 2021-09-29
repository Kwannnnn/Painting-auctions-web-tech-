const { StatusCodes } = require('http-status-codes');

const isAdmin = (req, res, next) => {
  if(req.user.roles.includes('admin')){
      return next();

  }
  res.status(StatusCodes.UNAUTHORIZED).send('you need to be admin');

};

module.exports = isAdmin;