const models = require('../models/models');
const randomId = require("random-id");

// place holder for the data
const users = [];

function addUser(user) {
  user.id = randomId(10);
  // user.email = "a@a.com";
  console.log("Adding user hhhhh", user);

  models.User.create(user);

  users.push(user);
}

function getUsers(user) {
    return users;
}

module.exports = { addUser, getUsers };
