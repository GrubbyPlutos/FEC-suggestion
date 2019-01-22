const fs = require('fs');
const data = require('./dataGenerator.js');
// write each restaurant entry to suggestions.csv, allowing for memory drain when necessary
const csvWriter = () => {
  const stream = fs.createWriteStream('suggestions1.csv');
  let i = 1;
  const max = 10000001;

  stream.write('id,name,food,food_type,location,wait_time,price,reviews,stars,quality,timeliness,accuracy,username,review_text,picture\n');

  const writer = () => {
    let result = true;

    while (i < max && result) {
      result = stream.write(data.stringBuilder(i, data.pictures));
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
      if (i === 10000000) {
        console.log(i);
      }
    }

    if (i < max) {
      stream.once('drain', writer);
    }
  };
  return writer();
};

csvWriter();
