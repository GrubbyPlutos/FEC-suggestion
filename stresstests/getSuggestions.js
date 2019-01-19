import http from 'k6/http';

// add stages
// consider adding checks -- make sure response is ok? time?


export default function () {
  const id = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:3003/restaurants/${id}/suggestions`);
}
