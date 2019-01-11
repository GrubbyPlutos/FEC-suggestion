const faker = require('faker');

const fs = require('fs');

// generate random restaurant info and format into csv entry
const stringBuilder = (i, pictures) => {
  let fakerInfo = {
    id: i,
    name: faker.lorem.word(),
    food: faker.lorem.words(),
    wait_time: faker.random.number(60),
    price: faker.random.number(15),
    reviews: faker.random.number(2000),
    stars: faker.random.number(100),
    quality: faker.random.number(100),
    timeliness: faker.random.number({
      min: 60,
      max: 100,
    }),
    accuracy: faker.random.number({
      min: 70,
      max: 100,
    }),
    username: faker.name.firstName(),
    review_text: faker.lorem.sentence(),
    picture: pictures[faker.random.number(pictures.length - 1)]
  };

  let fakerArray = Object.values(fakerInfo);
  let csvString = fakerArray.join(',');

  return `${csvString}\n`;
};

// write each restaurant entry to suggestions.csv, allowing for memory drain when necessary
const dataGenerator = () => {
  const pictures = [];
  const stream = fs.createWriteStream('suggestions.csv');
  let i = 1;
  const max = 10000000;

  stream.write('id,name,food,maxWaitTime,minWaitTime,reviewNo,stars,good,onTime,accurate,reviewUsername,review,picture,suggestions,bookmarked \n');

  // generate array of 1000 random photo urls to choose from (for use in stringBuilder())
  for (let x = 0; x < 1001; x += 1) {
    pictures.push(faker.image.food(200, 200, true));
  }

  const writer = () => {
    let result = true;

    while (i < max && result) {
      result = stream.write(stringBuilder(i, pictures));
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

dataGenerator();