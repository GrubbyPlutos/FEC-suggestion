const faker = require('faker');

const foodTypes = ['asian', 'coffee and tea', 'american', 'sandwiches', 'mexican', 'deli', 'healthy', 'salads', 'indian', 'italian', 'thai', 'seafood', 'japanese', 'hawaiian', 'vegetarian', 'vegan', 'pizza', 'pasta', 'bar food', 'vietnamese', 'dessert', 'tacos', 'ethiopian', 'halal', 'sushi', 'pho', 'afghan', 'chinese', 'burger'];

// generate array of 1000 random photo urls to choose from (for use in stringBuilder)
const pictureGenerator = () => {
  const pictures = [];

  for (let x = 0; x < 1001; x += 1) {
    pictures.push(faker.image.food(200, 200, true));
  }
  return pictures;
};


// generate random restaurant info and format into csv entry
const stringBuilder = (i, pictures) => {
  const fakerInfo = {
    id: i,
    accuracy: faker.random.number({
      min: 70,
      max: 100,
    }),
    food: faker.lorem.words(),
    food_type: foodTypes[faker.random.number(foodTypes.length - 1)],
    location: faker.random.number({
      min: 1,
      max: 1001,
    }),
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

  const fakerArray = Object.values(fakerInfo);
  const csvString = fakerArray.join(',');

  return `${csvString}\n`;
};

module.exports = { pictures: pictureGenerator(), stringBuilder };
