import {
  TOGGLE_HAMBURGER, REQUEST_AUTHORIZATION, RECEIVE_AUTHORIZATION,
  RECEIVE_SPEAK_EASIES, REQUEST_SPEAK_EASIES, TAP_SPEAK_EASY, SET_TOKEN,
  FAILED_AUTHORIZATION,
} from "../constants";

import update from "react/lib/update";
import { merge } from "lodash";

const initialState = {
  hamburgerToggled: false,
};

const initialEntityState = {
  location: {}
}

export function rootReducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_HAMBURGER:
      return Object.assign({}, state, {
        hamburgerToggled: !state.hamburgerToggled
      });
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      });
    default:
      return state;
  }
}

export function authorizationReducer(state = {}, action) {
  switch(action.type) {
    case REQUEST_AUTHORIZATION:
      return Object.assign({}, state, {
        isRequesting: true,
      });
    case RECEIVE_AUTHORIZATION:
      return Object.assign({}, state, {
        isRequesting: false
      });
    default:
      return state;
  }
}

export function speakEasyReducer(state = {}, action) {
  switch(action.type) {
    case RECEIVE_SPEAK_EASIES:
      return Object.assign({}, state, { isFetching: false, });
    case REQUEST_SPEAK_EASIES:
      return Object.assign({}, state, { isFetching: true });
    case TAP_SPEAK_EASY:
      return Object.assign({}, state, { activeId: action.id });
    default:
      return state;
  }
}

export function entityReducer(state = initialEntityState, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}
