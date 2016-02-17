import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Root from "./containers/Root";
import SignIn from "./containers/SignIn";
import Welcome from "./components/Welcome";

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={SignIn} />
      </Route>
      <Route path="/welcome" component={Welcome} />
    </Router>
  </Provider>
), document.getElementById('main'))
