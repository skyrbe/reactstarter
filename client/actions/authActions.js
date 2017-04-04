import axios from 'axios';
import jwt from 'jsonwebtoken';

import { SET_CURRENT_USER } from './typeConstants';
import {setAuthToken} from '../utils/setAuthToken';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userLoginRequest(authData) {
  return dispatch => {
    //uncomment the below line once the API is ready
    let data = 'data='+JSON.stringify(authData);
    return axios.post('/api/user/login',data).then(res => {
      console.log("auth login " , res);
      if(res.data.response) {
        const jwtToken = res.data.response.token;
        if(jwtToken) {
          localStorage.setItem('jwtToken',jwtToken);
          const decodedToken = jwt.decode(jwtToken);
          const user = decodedToken.user_details;
          const token = decodedToken.token;
          if(user.is_mobile_verified) {
            setAuthToken(user.token);
            dispatch(setCurrentUser(user));
          }
        }
      }
      return res;
    });
  }
}

export function logout(userid) {
  return dispatch => {
    let data = 'data='+JSON.stringify(userid);
    return axios.post('/api/user/logout',data).then(res => {
      localStorage.removeItem('jwtToken');
      setAuthToken(false);
      dispatch(setCurrentUser({}));
    });
  }
}
