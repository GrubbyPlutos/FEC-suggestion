const client = require('./index.js');

module.exports.addNewRestaurant = (req, res) => {
  // insert new restaurant to database
  // Input: identifying info of restaurant in obj format
  // Output: none
  return client.query(``)
    .then(res.send())
    .catch(err => console.error(err));
};

module.exports.getAllSuggestions = (req, res) => {
  return client.query(`SELECT * from restaurants where id=5`)
    .then(suggestions => res.send(suggestions))
    .catch(err => console.error(err));
};

module.exports.updateRestaurant = (req, res) => {
  // update some data about the restaurant
  // Input: id of restaurant and info to update (in obj format)
  // Output: none
  return client.query(`UPDATE`)
    .then(res.send())
    .catch(err => console.error(err));
};

module.exports.deleteRestaurant = (req, res) => {
  return client.query(`DELETE`)
    .then(res.send())
    .catch(err => console.error(err));
};
