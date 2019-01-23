import http from 'k6/http';

const getRandomNum = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default function () {
  const val = getRandomNum(1, 10);
  let id = 9999999;

  // for 40% of hits, request suggestions for a random id
  if (val > 6) {
    id = Math.floor(getRandomNum(1, 9999998));
  }

  // otherwise request suggestions for the same id (representing cached data)
  http.get(`http://localhost:3003/restaurants/${id}/suggestions`);
};