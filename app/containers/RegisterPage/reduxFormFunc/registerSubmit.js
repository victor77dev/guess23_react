import { SubmissionError } from 'redux-form/immutable';
import axios from 'axios';
import config from 'config/config.json';

import { registered } from '../actions';

const apiUrl = config.server.basePath;

export default function registerSubmit(values, dispatch, props) {
  return axios.post(`${apiUrl}/api/v1/rest-auth/registration/`, values)
    .then((response) => {
      const { data } = response;
      if (!('token' in data)) {
        throw data;
      } else {
        dispatch(registered('You have registered sucessfully'));
        props.history.push('/login');
      }
    })
    .catch((err) => {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_error"] }] */
      const formErrorMsg = {};
      formErrorMsg._error = 'Server Error!';
      if (err.response && err.response.data) {
        const { data } = err.response;
        formErrorMsg._error = [];
        Object.keys(data).forEach((key) => {
          formErrorMsg._error.push(data[key]);
        });
      }
      throw new SubmissionError(formErrorMsg);
    });
}
