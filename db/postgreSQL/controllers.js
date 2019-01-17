const pg = require('./index.js');

module.exports.addNewRestaurant = (req, res) => {
  return pg.client.query(`INSERT INTO restaurants values (${req.body.id},${req.body.accuracy},'${req.body.food}','${req.body.food_type}',
    ${req.body.location},'${req.body.name}','${req.body.picture}',${req.body.price},${req.body.quality},'${req.body.review_text}',
    ${req.body.reviews},${req.body.stars},${req.body.timeliness},'${req.body.username}',${req.body.wait_time})`)
    .then(res.send())
    .catch(err => res.send(`Could not add new restaurant because ${err}`));
};

module.exports.getAllSuggestions = (req, res) => {
  return pg.client.query(`SELECT location, food_type FROM restaurants WHERE id=${req.params.id}`)
    .then((results) => {
      const categories = results.rows[0];
      return pg.client.query(`SELECT * FROM restaurants WHERE location=${categories.location} AND food_type='${categories.food_type}' limit 12`)
        .then(suggestions => res.send(suggestions.rows));
    })
    .catch(err => res.send(`Could not get suggestions for restaurant id: ${req.params.id} (${err})`));
};

module.exports.updateRestaurant = (req, res) => {
  return pg.client.query(`UPDATE restaurants SET ${req.body.column} = ${req.body.value} WHERE id = ${req.params.id}`)
    .then(res.send())
    .catch(err => res.send(`Could not update restaurant id: ${req.params.id} (${err})`));
};

module.exports.deleteRestaurant = (req, res) => {
  return pg.client.query(`DELETE FROM restaurants WHERE id = ${req.params.id}`)
    .then(res.send())
    .catch(err => res.send(`Could not delete restaurant id: ${req.params.id} (${err})`));
};
