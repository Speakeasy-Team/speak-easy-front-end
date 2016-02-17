import {
  TOGGLE_HAMBURGER,
  REQUEST_AUTHORIZATION,
  RECEIVE_AUTHORIZATION,
  RECEIVE_SPEAK_EASIES,
  REQUEST_SPEAK_EASIES,
} from "../constants";

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
      console.log(action);
      return Object.assign({}, state, {
        token: action.data.token,
      });
    default:
      return state;
  }
}

export function entityReducer(state = initialEntityState, action) {
  switch(action.type) {
    case RECEIVE_SPEAK_EASIES:
      return Object.assign({}, state, {
        speakEasies: {
          isFetching: false,
          data: action.json.data,
        }
      });
    case REQUEST_SPEAK_EASIES:
      return Object.assign({}, state, {
        speakEasies: {
          isFetching: true
        }
      });
    default:
      return state;
  }
}
