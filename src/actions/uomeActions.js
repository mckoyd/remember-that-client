import { API_BASE_URL } from '../config';

export const TOGGLE_UOME_ADD_FORM = 'TOGGLE_UOME_ADD_FORM',
  toggleUomeAddForm = () => ({
    type: TOGGLE_UOME_ADD_FORM
  });

export const FETCH_UOMES_SUCCESS = 'FETCH_UOMES_SUCCESS',
  fetchUomesSuccess = uomes => ({
    type: FETCH_UOMES_SUCCESS, uomes
  }),
  fetchUomes = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/uomes`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${authToken}`}
    })
      .then(uomes => !uomes.ok ? Promise.reject(uomes.statusText) : uomes.json())
      .then(uomes => {
        dispatch(fetchUomesSuccess(uomes));
      });
  };

export const POST_UOME_SUCCESS = 'POST_UOME_SUCCESS',
  postUomeSuccess = uome => ({
    type: POST_UOME_SUCCESS, uome
  }),
  postUome = uome => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/uomes`, {
      body: JSON.stringify(uome),
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      }
    })
      .then(uome => !uome.ok ? Promise.reject(uome.statusText) : uome.json())
      .then(uome => dispatch(postUomeSuccess(uome)));
  };

export const DELETE_UOME_SUCCESS = 'DELETE_UOME_SUCCESS',
  deleteUomeSuccess = uome => ({
    type: DELETE_UOME_SUCCESS, uome
  }),
  deleteUome = uome => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/uomes/${uome.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${authToken}`}
    })
      .then(oume => dispatch(deleteUomeSuccess(oume)))
      .then(() => dispatch(fetchUomes()));
  };