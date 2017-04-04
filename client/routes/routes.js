import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import Login from '../components/Login/Login';
import Home from '../components/Home';

import requireAuth from '../utils/requireAuth';

export default (
  <Route path = "/" component={App}>
    <IndexRoute component={Login} />
    <Route path= "home" component={requireAuth(Home)} />
  </Route>
)
