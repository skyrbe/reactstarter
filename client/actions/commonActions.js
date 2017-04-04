import axios from 'axios';

export function getIndustryList() {
  return dispatch => {
    return axios.post('/api/industry/populateddl');
  }
}

export function getDesignationList() {
  return dispatch => {
    return axios.post('/api/designation/populateddl');
  }
}
