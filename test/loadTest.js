import http from 'k6/http';
import { check } from 'k6';
const port = 3003;

export const options = {
  vus: 10,
  duration: '5s',
};

export default function () {
  const res = http.get(`http://localhost:${port}/`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  // sleep(1);
}
