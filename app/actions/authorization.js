import { browserHistory } from "react-router";
import {
  REQUEST_AUTHORIZATION,
  RECEIVE_AUTHORIZATION,
  FAILED_AUTHORIZATION,
} from "../constants";
import { speakEasyApi } from "../services/speakEasyApi";

export function requestAuthorization(email, password) {
  return { type: REQUEST_AUTHORIZATION }
}

export function receiveAuthorization(json) {
  return { type: RECEIVE_AUTHORIZATION, data: json }
}

export function failedAuthorization(reason) {
  return { type: FAILED_AUTHORIZATION, data: reason }
}

export function authorize({email, password}, dispatch) {
  dispatch(requestAuthorization);

  return (
    speakEasyApi.authorize(email, password)
    .then(json => dispatch(receiveAuthorization(json)))
    .then(() => browserHistory.push("/speakeasies"))
    .catch(reason => {
      dispatch(failedAuthorization);
      return Promise.reject({_error: ["Your email or password is invalid"]})
    })
  )
}
