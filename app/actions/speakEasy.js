import { browserHistory } from "react-router";
import { REQUEST_SPEAK_EASIES, RECEIVE_SPEAK_EASIES, TAP_SPEAK_EASY,
  SEND_POST_SPEAK_EASY, RECEIVE_POST_SPEAK_EASY, API_URL, } from "../constants";
import { normalize, Schema, arrayOf } from "normalizr";
import { speakEasyAPI } from "../services/speakEasyAPI";

const speakEasy = new Schema('speakEasies');

function requestSpeakEasies() {
  return { type: REQUEST_SPEAK_EASIES }
}

function receiveSpeakEasies(json) {
  const response = normalize(json, {
    data: arrayOf(speakEasy)
  });

  return {
    type: RECEIVE_SPEAK_EASIES,
    response
  }
}

export function loadSpeakEasies() {
  return dispatch => {
    dispatch(requestSpeakEasies());

    return speakEasyAPI.getSpeakEasies()
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
      speakEasyAPI.postSpeakEasy(params, token)
        .then(dispatch(receivePostSpeakEasy()))
        .then(browserHistory.push("/speakeasies"))
        .catch(reason => console.log(reason))
    )
  }
}
