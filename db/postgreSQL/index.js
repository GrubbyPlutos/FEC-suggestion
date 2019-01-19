const pg = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/suggestions';

const client = new pg.Client(connectionString);
client.connect((err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Connected to PostgreSQL: suggestions');
});

module.exports = { client };
