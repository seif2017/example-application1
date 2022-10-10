const models = require('../models/models');
const randomId = require("random-id");

// place holder for the data
const users = [];

exports.addUser = (user) => {
  user.id = randomId(10);
  // user.email = "a@a.com";
  console.log("Adding user : ", user);

  models.User.create(user);

  users.push(user);
}

exports.getUsers = () => {
  console.log("Getting users ");

    return users;
}

