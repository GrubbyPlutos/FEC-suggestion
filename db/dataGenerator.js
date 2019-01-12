const faker = require('faker');

const fs = require('fs');

// generate random restaurant info and format into csv entry
const stringBuilder = (i, pictures, places) => {
  let fakerInfo = {
    id: i,
    accuracy: faker.random.number({
      min: 70,
      max: 100,
    }),
    food: faker.lorem.words(),
    location: places[faker.random.number(pictures.length - 1)],
    name: faker.lorem.word(),
    picture: pictures[faker.random.number(pictures.length - 1)],
    price: faker.random.number(15),
    quality: faker.random.number(100),
    review_text: faker.lorem.sentence(),
    reviews: faker.random.number(2000),
    stars: faker.random.number(100),
    timeliness: faker.random.number({
      min: 60,
      max: 100,
    }),
    username: faker.name.firstName(),
    wait_time: faker.random.number(60),
  };

  let fakerArray = Object.values(fakerInfo);
  let csvString = fakerArray.join(',');

  return `${csvString}\n`;
};

// write each restaurant entry to suggestions.csv, allowing for memory drain when necessary
const dataGenerator = () => {
  const pictures = [];
  const places = [];
  const stream = fs.createWriteStream('suggestions1.csv');
  let i = 1;
  const max = 100000;

  stream.write('id,name,food,location,wait_time,price,reviews,stars,quality,timeliness,accuracy,username,review_text,picture\n');

  // generate array of 1000 random photo urls to choose from (for use in stringBuilder)
  for (let x = 0; x < 1001; x += 1) {
    pictures.push(faker.image.food(200, 200, true));
  }

  // generate array of 1000 random locations to choose from (for use in stringBuilder)

  for (let x = 0; x < 1001; x += 1) {
    places.push(faker.address.city());
  }

  const writer = () => {
    let result = true;

    while (i < max && result) {
      result = stream.write(stringBuilder(i, pictures, places));
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