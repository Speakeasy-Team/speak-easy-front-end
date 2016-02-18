import {
  REQUEST_SPEAK_EASIES,
  RECEIVE_SPEAK_EASIES,
  TAP_SPEAK_EASY,
  API_URL,
} from "../constants";

import { normalize, Schema, arrayOf } from 'normalizr';

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

    return fetch(`${API_URL}/locations`)
      .then(res => res.json())
      .then(json => dispatch(receiveSpeakEasies(json)));
  }
}

export function tapSpeakEasy(speakEasyId) {
  return (dispatch, getState) => {
    const state = getState();
    let id;

    if (state.speakEasies.activeId === speakEasyId) {
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
