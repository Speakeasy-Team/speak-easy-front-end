import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Root from "./containers/Root";
import SignIn from "./containers/SignIn";
import SpeakEasies from "./containers/SpeakEasies";
import SpeakEasyForm from "./components/SpeakEasyForm";
import SpeakEasyFormContainer from "./containers/SpeakEasyFormContainer";

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={SignIn} />
        <Route path="/speakeasies" component={SpeakEasies} />
        <Route path="/speakeasies/new" component={SpeakEasyFormContainer} />
        <Route path="/speakeasies/:id/edit" component={SpeakEasyFormContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('main'))
