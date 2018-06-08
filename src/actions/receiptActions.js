import { API_BASE_URL } from '../config';

export const TOGGLE_RECEIPT_ADD_FORM = 'TOGGLE_RECEIPT_ADD_FORM',
  toggleReceiptAddForm = () => ({
    type: TOGGLE_RECEIPT_ADD_FORM
  });

export const FETCH_RECEIPTS_SUCCESS = 'FETCH_RECEIPTS_SUCCESS',
  fetchReceiptsSuccess = receipts => ({
    type: FETCH_RECEIPTS_SUCCESS, receipts
  }),
  fetchReceipts = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/receipts`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${authToken}`}
    })
      .then(receipts => !receipts.ok ? Promise.reject(receipts.statusText) : receipts.json())
      .then(receipts => {
        dispatch(fetchReceiptsSuccess(receipts));
      });
  };

export const POST_RECEIPT_SUCCESS = 'POST_RECEIPT_SUCCESS',
  postReceiptSuccess = receipt => ({
    type: POST_RECEIPT_SUCCESS, receipt
  }),
  postReceipt = receipt => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/receipts`, {
      body: JSON.stringify(receipt),
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      }
    })
      .then(receipt => !receipt.ok ? Promise.reject(receipt.statusText) : receipt.json())
      .then(receipt => dispatch(postReceiptSuccess(receipt)));
  };

export const DELETE_RECEIPT_SUCCESS = 'DELETE_RECEIPT_SUCCESS',
  deleteReceiptSuccess = receipt => ({
    type: DELETE_RECEIPT_SUCCESS, receipt
  }),
  deleteReceipt = receipt => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/receipts/${receipt.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${authToken}`}
    })
      .then(receipt => dispatch(deleteReceiptSuccess(receipt)))
      .then(() => dispatch(fetchReceipts()));
  };