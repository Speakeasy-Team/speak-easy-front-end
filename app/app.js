import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Root from "./containers/Root";
import SignIn from "./containers/SignIn";
import Locations from "./containers/Locations";

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={SignIn} />
        <Route path="/locations" component={Locations} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('main'))
