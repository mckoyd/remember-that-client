import { TOGGLE_SIDE_NAV, TOGGLE_LOGIN_MODAL, TOGGLE_SIGNUP_MODAL } from '../actions';

const initState = {
  sideNavView: false,
  loginModalView: false,
  signupModalView: false,
};

export default (state=initState, action) => {
  if(action.type===TOGGLE_SIDE_NAV){
    return {...state, 
      sideNavView: !state.sideNavView,
    };
  }
  if(action.type===TOGGLE_LOGIN_MODAL){
    return {...state, 
      loginModalView: !state.loginModalView
    };
  }
  if(action.type===TOGGLE_SIGNUP_MODAL){
    return {...state, 
      signupModalView: !state.signupModalView,
    };
  }
  return state;
};