import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} = err;
      if(reason==='ValidationError'){
        return Promise.reject(new SubmissionError({ [location]: message }));
      }
    });
};