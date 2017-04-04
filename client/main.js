import React,{ Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import jwt from 'jsonwebtoken';

import routes from './routes/routes';
import {setAuthToken,setDefaultToken} from './utils/setAuthToken';
import {setCurrentUser} from './actions/authActions';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

setDefaultToken();

if(localStorage.jwtToken)
{
  const jwtToken = localStorage.getItem('jwtToken');
  const decodedToken = jwt.decode(jwtToken);
  const user = decodedToken.user_details;
  setAuthToken(user.token);
  store.dispatch(setCurrentUser(user,user.is_mobile_verified));
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,document.getElementById('app'));
