import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import App from '../containers/App'
import SignIn from '../containers/SignIn'

render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SignIn} />
      </Route>
    </Router>
), document.getElementById('app'))

