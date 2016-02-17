import { browserHistory } from 'react-router';

export const TOGGLE_HAMBURGER = "TOGGLE_HAMBURGER";
export const REQUEST_AUTHORIZATION = "REQUEST_AUTHORIZATION";
export const RECEIVE_AUTHORIZATION = "RECEIVE_AUTHORIZATION";

const api_url = "http://localhost:4000";

export function toggleHamburger() {
  return { type: TOGGLE_HAMBURGER }
}

export function requestAuthorization(email, password) {
  return { type: REQUEST_AUTHORIZATION }
}

export function receiveAuthorization(json) {
  return { type: RECEIVE_AUTHORIZATION, data: json }
}

export function authorize(email, password) {
  return dispatch => {
    dispatch(requestAuthorization());

    return fetch(`${api_url}/sessions/`, buildAuthRequest(email, password))
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          throw new Error(response.statusText)
        }
      })
      .then(res => res.json())
      .then(json => dispatch(receiveAuthorization(json)))
      .then(() => browserHistory.push("/welcome"))
      .catch(reason => console.log(reason))
      .done
  }
}

function buildAuthRequest(email, password) {
  return {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }
}
