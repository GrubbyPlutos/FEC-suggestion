import http from 'k6/http';

const ids = [];

for (let i = 0; i < (Math.ceil(Math.random() * 120)); i += 1) {
  ids.push(Math.ceil(Math.random() * 10000000));
}
export default function () {
  // const id = Math.floor(Math.random() * 10000000);
  const id = ids[Math.floor(Math.random() * (ids.length-1))];
  http.get(`http://localhost:3003/restaurants/${id}/suggestions`);
}
