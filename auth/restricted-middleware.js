const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
// use the session information to retrict 
  console.log("session", req.session);
  if(req.session && req.session.loggedIn){
    next();
  } else{
    res.status(401).json({message: "you shall not pass!"})
  }

};
