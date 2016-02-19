import {
  TOGGLE_HAMBURGER,
  REQUEST_AUTHORIZATION,
  RECEIVE_AUTHORIZATION,
  RECEIVE_SPEAK_EASIES,
  REQUEST_SPEAK_EASIES,
  TAP_SPEAK_EASY,
  SET_TOKEN,
} from "../constants";

import update from "react/lib/update";
import { merge } from "lodash";

const initialState = {
  hamburgerToggled: false,
};

const initialEntityState = {
  speakEasies: {}
}

export function rootReducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_HAMBURGER:
      return Object.assign({}, state, {
        hamburgerToggled: !state.hamburgerToggled
      });
    case REQUEST_AUTHORIZATION:
      return Object.assign({}, state, { isRequestionAuth: true });
    case RECEIVE_AUTHORIZATION:
      return Object.assign({}, state, {
        token: action.data.token,
      });
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      });
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
