import { API_BASE_URL } from '../config';

export const TOGGLE_IOU_ADD_FORM = 'TOGGLE_IOU_ADD_FORM',
  toggleIouAddForm = () => ({
    type: TOGGLE_IOU_ADD_FORM
  });

export const FETCH_IOUS_SUCCESS = 'FETCH_IOUS_SUCCESS';
export const fetchIousSuccess = ious => ({
  type: FETCH_IOUS_SUCCESS, ious
});
export const FETCH_IOUS_ERROR = 'FETCH_IOUS_ERROR';
export const fetchIousError = error => ({
  type: FETCH_IOUS_ERROR, error
});
export const fetchIous = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/ious`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${authToken}`}
  })
    .then(res => res.json())
    .then(ious => dispatch(fetchIousSuccess(ious)))
    .catch(err => {
      dispatch(fetchIousError(err));
    });
};

export const POST_IOU_SUCCESS = 'POST_IOU_SUCCESS',
  postIouSuccess = iou => ({
    type: POST_IOU_SUCCESS, iou
  }),
  postIou = iou => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/ious`, {
      body: JSON.stringify(iou),
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      }
    })
      .then(iou => !iou.ok ? Promise.reject(iou.statusText) : iou.json())
      .then(iou => dispatch(postIouSuccess(iou)));
  };

export const DELETE_IOU_SUCCESS = 'DELETE_IOU_SUCCESS';
export const deleteIouSuccess = iou => ({
  type: DELETE_IOU_SUCCESS, iou
});
export const deleteIou = iou => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/ious/${iou.id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${authToken}`}
  })
    .then(iou => dispatch(deleteIouSuccess(iou)))
    .then(() => dispatch(fetchIous()));
};