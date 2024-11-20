// const { Token } = require("../models");

// Middleware to refresh the token and add `authorization` to the request
const refreshTokenMiddleware = (req, res, next) => {
  const tokenCookie = req.cookies.token;

  if (tokenCookie) {


  }

  next();
};

module.exports = refreshTokenMiddleware;
