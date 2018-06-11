import { SubmissionError } from 'redux-form/immutable';
import axios from 'axios';
import config from 'config/config.json';
const apiUrl = config.server.basePath;

const registerAsyncValidate = (values, dispatch) => {
  const validates = [registerEmailValidate(values, dispatch), registerUsernameValidate(values, dispatch)];
  // Convert throw errors to resolve from all validate
  const catchPromises = validates.map((promise) => promise.catch((err) => err));
  // Catch all converted errors and group before throw overall error
  return Promise.all(catchPromises)
    .then((catchErr) => {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_error"] }] */
      const allErr = catchErr.reduce((errsObj, submissionError) => {
        if (!submissionError) return errsObj;
        const { errors: err } = submissionError;
        let tempObj = {};
        Object.keys(err).forEach((key) => {
          if (key !== '_error') {
            const { _error, ...others } = errsObj;
            tempObj = { [key]: err[key], ...others, ...tempObj };
          } else if (errsObj._error.includes(err[key])) {
            // Skip the repeat errors
            tempObj = { _error: [...errsObj._error], ...tempObj };
          } else {
            tempObj = { _error: [...errsObj._error, err[key]], ...tempObj };
          }
        });
        return tempObj;
      }, { _error: [] });

      // Only throw error if exists
      if (allErr._error.length !== 0) throw allErr;
    }).catch((err) => {
      throw err;
    });
};

const registerEmailValidate = (values) => {
  const checkEmail = values.get('email');
  return axios.get(`${apiUrl}/api/v1/users/checkEmail`, { params: { email: checkEmail } })
    .then((response) => {
      const { data } = response;
      if (!data || !('email' in data)) {
        return new SubmissionError({ email: 'Server Error. Unable to check.', _error: 'Server Error!' });
      } else if (data.email === checkEmail) {
        return new SubmissionError({ email: 'That email is already used', _error: 'Please use another email for registration.' });
      }
      return null;
    })
    .catch((err) => {
      throw new SubmissionError({ email: err.toString(), _error: 'Server Error!' });
    });
};

const registerUsernameValidate = (values) => {
  const checkUsername = values.get('username');
  return axios.get(`${apiUrl}/api/v1/users/checkUsername`, { params: { username: checkUsername } })
    .then((response) => {
      const { data } = response;
      if (!data || !('username' in data)) {
        return new SubmissionError({ username: 'Server Error. Unable to check.', _error: 'Server Error!' });
      } else if (data.username === checkUsername) {
        return new SubmissionError({ username: 'That username is already used', _error: 'Please use another username for registration.' });
      }
      return null;
    })
    .catch((err) => {
      throw new SubmissionError({ username: err.toString(), _error: 'Server Error!' });
    });
};

export default registerAsyncValidate;
