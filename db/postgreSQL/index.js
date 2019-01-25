// const pg = require('pg');
const { Pool } = require('pg')

const pool = new Pool({
  host: '54.215.237.234',
  // 'localhost',
  user: 'postgres',
  database: 'suggestions',
  max: 2000,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
});

const pool2 = new Pool({
  host: '54.67.102.239',
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
  console.log('Connected to PostgreSQL-1: suggestions');
});

pool2.connect((err, client, release) => {
  if (err) {
    return console.error(err);
  }
  console.log('Connected to PostgreSQL-2: suggestions');
});


module.exports = { pool, pool2 };
