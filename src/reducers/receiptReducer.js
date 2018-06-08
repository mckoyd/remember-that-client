import { TOGGLE_RECEIPT_ADD_FORM, FETCH_RECEIPTS_SUCCESS, POST_RECEIPT_SUCCESS, DELETE_RECEIPT_SUCCESS } from '../actions/receiptActions';

const initState = {
  modalFormView: false,
  receiptDetails: [],
};

export default (state=initState, action) => {
  if(action.type===TOGGLE_RECEIPT_ADD_FORM){
    return {...state,
      modalFormView: !state.modalFormView,
    };
  }
  if(action.type===FETCH_RECEIPTS_SUCCESS){
    return {...state, 
      receiptDetails: action.receipts,
    };
  }
  if(action.type===POST_RECEIPT_SUCCESS) {
    return {...state, 
      receiptDetails: [...state.receiptDetails, action.receipt],
      modalFormView: !state.modalFormView,
    };
  }
  if(action.type===DELETE_RECEIPT_SUCCESS) {
    return state;
  }
  return state;
};