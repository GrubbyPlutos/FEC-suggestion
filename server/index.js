const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/postgreSQL/controllers.js');

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/restaurants/:id', express.static(path.join(__dirname, '../client/dist')));

app.get('/restaurants/:id/suggestions', db.getAllSuggestions);

app.post('/restaurants', db.addNewRestaurant);

app.put('/restaurants/:id', db.updateRestaurant);

app.delete('/restaurants/:id', db.deleteRestaurant);

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
