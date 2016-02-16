import {
  TOGGLE_HAMBURGER,
  REQUEST_AUTHORIZATION,
  RECEIVE_AUTHORIZATION,
} from '../actions';

const initialState = {
  hamburgerToggled: false,
};

export default function(state = initialState, action) {
  console.log(action)
  switch(action.type) {
    case TOGGLE_HAMBURGER:
      return Object.assign({}, state, { hamburgerToggled: !state.hamburgerToggled });
    case REQUEST_AUTHORIZATION:
      return Object.assign({}, state, { isRequestionAuth: true });
    case RECEIVE_AUTHORIZATION:
      return Object.assign({}, state, { token: action.data.token });
    default:
      return state;
  }
}
