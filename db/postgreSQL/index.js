// const pg = require('pg');
const { Pool } = require('pg')

const pool = new Pool({
  host: '54.215.237.234',
  // 'localhost',
  user: 'postgres',
  database: 'suggestions',
  max: 2000,
});

// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/suggestions';

// const client = new pg.Client(connectionString);
// client.connect((err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('Connected to PostgreSQL: suggestions');
// });

// module.exports = { client };

pool.connect((err, client, release) => {
  if (err) {
    return console.error(err);
  }
  console.log('Connected to PostgreSQL: suggestions');
});


module.exports = { pool };
