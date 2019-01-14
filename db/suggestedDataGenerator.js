const faker = require('faker');

const fs = require('fs');

// generate random suggested restaurant ids and format into csv entry
const stringBuilder = (i) => {
  let fakerInfo = {
    id: i,
    suggested_id: faker.random.number({
      min: 1,
      max: 9999,
    }),
  };

  let fakerArray = Object.values(fakerInfo);
  let csvString = fakerArray.join(',');

  return `${csvString}\n`;
};

// write each restaurant entry to suggestions.csv, allowing for memory drain when necessary
const suggestedDataGenerator = () => {
  const stream = fs.createWriteStream('suggested.csv');
  let i = 1;
  const max = 14000000;

  stream.write('id,suggested_id\n');

  const writer = () => {
    let result = true;

    while (i < max && result) {
      const numSuggestions = faker.random.number({
        min: 12,
        max: 16,
      });

      for (let x = 0; x < numSuggestions; x += 1) {
        if (i < 1000000) {
          result = stream.write(stringBuilder(i));
        }
      }

      i += 1;
      if (i === 100000) {
        console.log(i);
      }
      if (i === 500000) {
        console.log(i);
      }
      if (i === 1000000) {
        console.log(i);
      }
      if (i === 2000000) {
        console.log(i);
      }
      if (i === 5000000) {
        console.log(i);
      }
      if (i === 8000000) {
        console.log(i);
      }
      if (i === 9999999) {
        console.log(i);
      }
    }
    
    if (i < max) {
      stream.once('drain', writer);
    }

  };
  return writer();
};

suggestedDataGenerator();
