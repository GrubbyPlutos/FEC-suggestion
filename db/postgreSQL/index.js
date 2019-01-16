const pg = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/suggestions';

const client = new pg.Client(connectionString);
client.connect();

const insert = () => {
  const query = client.query(`COPY restaurants FROM '/Users/jessicahodson/hack-reactor/SDC/SDC-suggestion/suggestions1.csv' DELIMITER ',' CSV HEADER;`, (err) => {
    if (err) {
      console.log(err);
    }
  });
  query.on('end', () => { client.end(); });
};

// const getSuggested = () => {
//   const query = client.query(`SELECT`, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
//   query.on('end', () => { client.end(); });
// };

insert();