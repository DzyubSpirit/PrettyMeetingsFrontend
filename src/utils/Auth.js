import { URL, LOGIN } from '../config/Api';

export function login(username, password) {
  console.log("URL: "+URL+LOGIN);
  return fetch(URL + LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then(response => (response.json()))
    .catch(err => {
      console.log(err);
    });
}

export function isLoggedIn() {
  return localStorage.getItem('token') !== null;
}
