import { browserHistory } from "react-router";
import {
  TOGGLE_HAMBURGER,
  REQUEST_AUTHORIZATION,
  RECEIVE_AUTHORIZATION,
  LOADED_APP,
  SET_TOKEN,
  API_URL,
} from "../constants";
import { getToken } from "../helpers/jwtToken";
import { speakEasyApi } from "../services/speakEasyApi";

function setToken() {
  return { type: SET_TOKEN, token: getToken() }
}

export function appLoaded() {
  return dispatch => {
    dispatch(setToken());
    dispatch({ type: LOADED_APP });
  }
}

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

    return (
      speakEasyApi.authorize(email, password)
        .then(json => dispatch(receiveAuthorization(json)))
        .then(() => browserHistory.push("/speakeasies"))
        .catch(reason => console.log(reason))
        .done
    )
  }
}
