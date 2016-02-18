import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { rootReducer, entityReducer, speakEasyReducer } from "../reducers";
import { reducer as formReducer } from "redux-form";

const reducers = {
  root: rootReducer,
  form: formReducer,
  entities: entityReducer,
  speakEasies: speakEasyReducer
};

const reducer = combineReducers(reducers)

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)

  return store
}
