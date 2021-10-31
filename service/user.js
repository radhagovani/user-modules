const User = require("../models/user");

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    User.create(user)
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
};
const modifyUser = (filter, obj) => {
  return new Promise((resolve, reject) => {
    User.updateOne(filter, obj)
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
};
const fetchUser = (filter) => {
  return new Promise((resolve, reject) => {
    User.findOne(filter)
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
};

const fetchAll = () => {
    return new Promise((resolve, reject) => {
      User.find({})
        .then((users) => resolve(users))
        .catch((err) => reject(err));
    });
  };

module.exports = {
    createUser,
    modifyUser,
    fetchUser,
    fetchAll
};
