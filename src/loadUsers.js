import { httpGet } from './http';

export default function loadUsers(id) {
  // bad practice
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}
