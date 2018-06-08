import { SET_AUTH_TOKEN, 
  CLEAR_AUTH, 
  AUTH_REQUEST, 
  AUTH_SUCCESS, 
  AUTH_ERROR } from '../actions/auth';



const initState = {
  authToken: null, 
  currentUser: null, 
  loading: false, 
  error: null
};

export default (state=initState, action) => {
  if(action.type === SET_AUTH_TOKEN) {
    return {...state, authToken: action.authToken};
  }
  if(action.type === CLEAR_AUTH) {
    return {...state, authToken: null, currentUser: null};
  }
  if(action.type === AUTH_REQUEST) {
    return {...state, loading: true, error: null};
  }
  if(action.type === AUTH_SUCCESS) {
    return {...state, loading: false, currentUser: action.currentUser};
  }
  if(action.type === AUTH_ERROR) {
    return {...state, loading: false, error: action.error};
  }
  return state;
};