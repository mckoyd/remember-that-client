import { TOGGLE_UOME_ADD_FORM, 
  FETCH_UOMES_SUCCESS, 
  POST_UOME_SUCCESS, 
  DELETE_UOME_SUCCESS } from '../actions/uomeActions';

const initState = {
  modalFormView: false,
  uomeDetails: [],
};

export default (state=initState, action) => {
  if(action.type===TOGGLE_UOME_ADD_FORM){
    return {...state,
      modalFormView: !state.modalFormView,
    };
  }
  if(action.type===FETCH_UOMES_SUCCESS){
    return {...state, 
      uomeDetails: action.uomes,
    };
  }
  if(action.type===POST_UOME_SUCCESS) {
    return {...state, 
      uomeDetails: [...state.uomeDetails, action.uome],
      modalFormView: !state.modalFormView,
    };
  }
  if(action.type===DELETE_UOME_SUCCESS) {
    return state;
  }
  return state;
};