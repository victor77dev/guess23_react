import { SubmissionError } from 'redux-form/immutable';
import axios from 'axios';
import { loading } from 'containers/LoginPage/actions';

const apiUrl = 'http://localhost:8000';

function loginSubmit(values, dispatch, props) {
  return axios.post(`${apiUrl}/api/v1/rest-auth/login/`, values)
    .then((response) => {
      const { data } = response;
      if (!('token' in data)) {
        throw data;
      } else {
        const token = response.data.token;
        localStorage.setItem('token', token);
        props.history.push('/');
        dispatch(loading());
      }
    })
    .catch((err) => {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_error"] }] */
      const formErrorMsg = {};
      formErrorMsg._error = 'Server Error!';
      if (err.response && err.response.data) {
        const { data } = err.response;
        if (data.non_field_errors) {
          formErrorMsg._error = data.non_field_errors;
        } else if (data.password) {
          formErrorMsg._error = ['Password is required.'];
        }
      }
      throw new SubmissionError(formErrorMsg);
    });
}

export default loginSubmit;
