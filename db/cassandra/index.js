let cassandra = require('cassandra-driver');

let client = new cassandra.Client({contactPoints: ['localhost'], keyspace: 'suggestions', localDataCenter: 'datacenter1'});

client.execute('SELECT * FROM suggestions.restaurants WHERE id=3', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
  process.exit();
});
