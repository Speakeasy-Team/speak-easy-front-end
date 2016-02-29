import { browserHistory } from "react-router";
import {
  REQUEST_SPEAK_EASIES, RECEIVE_SPEAK_EASIES, TAP_SPEAK_EASY,
  SEND_POST_SPEAK_EASY, RECEIVE_POST_SPEAK_EASY, API_URL,
  SEND_UPDATE_SPEAK_EASY, RECEIVE_UPDATE_SPEAK_EASY
} from "../constants";
import { normalize, Schema, arrayOf } from "normalizr";
import { speakEasyApi } from "../services/speakEasyApi";
import { entitize } from "../services/entitizer";

const speakEasy = new Schema('speakEasies');

function requestSpeakEasies() {
  return { type: REQUEST_SPEAK_EASIES }
}

function receiveSpeakEasies(json) {
  const response = entitize(json);
  return {
    type: RECEIVE_SPEAK_EASIES,
    response
  }
}

export function loadSpeakEasies() {
  return dispatch => {
    dispatch(requestSpeakEasies());

    return speakEasyApi.getSpeakEasies()
      .then(json => dispatch(receiveSpeakEasies(json)));
  }
}

export function tapSpeakEasy(speakEasyId) {
  return (dispatch, getState) => {
    const { speakEasies } = getState();
    let id;

    if (speakEasies.activeId === speakEasyId) {
      id = null;
    } else {
      id = speakEasyId;
    };

    return dispatch({
      type: TAP_SPEAK_EASY,
      id: id
    });
  }
}

function sendPostSpeakEasy() {
  return { type: SEND_POST_SPEAK_EASY }
}

function receivePostSpeakEasy() {
  return { type: RECEIVE_POST_SPEAK_EASY }
}

export function postSpeakEasy(params) {
  return (dispatch, getState) => {
    const { root: { token } } = getState();
    dispatch(sendPostSpeakEasy());

    return (
      speakEasyApi.postSpeakEasy(params, token)
        .then(() => dispatch(receivePostSpeakEasy()))
        .then(() => browserHistory.push("/speakeasies"))
        .catch(reason => console.log(reason))
    )
  }
}

function sendUpdateSpeakEasy() {
  return { type: SEND_UPDATE_SPEAK_EASY }
}

function receiveUpdateSpeakEasy() {
  return { type: RECEIVE_UPDATE_SPEAK_EASY }
}

export function updateSpeakEasy(id, params) {
  return (dispatch, getState) => {
    const { root: { token } } = getState();
    dispatch(sendUpdateSpeakEasy());

    return (
      speakEasyApi.updateSpeakEasy(id, params, token)
        .then(() => dispatch(receiveUpdateSpeakEasy()))
        .then(() => browserHistory.push("/speakeasies"))
        .catch(reason => console.log(reason))
    )
  }
}
