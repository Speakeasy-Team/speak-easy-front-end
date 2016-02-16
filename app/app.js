import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import { createStore } from "redux";
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import App from './containers/App'
import SignIn from './containers/SignIn'

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SignIn} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('main'))
