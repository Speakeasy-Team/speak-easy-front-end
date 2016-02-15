import { TOGGLE_HAMBURGER } from '../actions';

const initialState = {
  hamburgerToggled: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_HAMBURGER:
      return Object.assign({}, state, { hamburgerToggled: !state.hamburgerToggled});
    default:
      return state;
  }
}
