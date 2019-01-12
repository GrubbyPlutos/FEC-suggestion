const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/restaurants/:id', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/restaurants/:id/suggestions', (req, res) => {
  db.get(req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    res.status(200).json(data);
  });
});

app.post('/restaurants', (req, res) => {
  // insert new restaurant to database
  // Input: identifying info of restaurant in obj format
  // Output: none
});


app.put('/restaurants/:id', (req, res) => {
  // update some data about the restaurant
  // Input: id of restaurant and info to update (in obj format)
  // Output: none
});

app.delete('/restaurants/:id', (req, res) => {
  // delete a restaurant entry from the database
  // Input: id of restaurant
  // Output: none
});

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
