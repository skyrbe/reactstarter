import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  if(data.mobile_no.length != 10) {
    errors.mobile_no = "Mobile Number should contain 10 digits";
  }

  if(!Validator.isNumeric(data.mobile_no)) {
    errors.mobile_no = "Mobile number should contain only numbers";
  }

  if(Validator.isEmpty(data.mobile_no)) {
    errors.mobile_no = "Please enter mobile number";
  }

  if( data.password.length < 6 || data.password.length > 15 ) {
    errors.password = "Password should be between 6 and 15 characters long";
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = "Please enter password";
  }

  return {
    errors,
    isValid:isEmpty(errors)
  }
}
