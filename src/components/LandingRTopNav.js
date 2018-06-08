import React from 'react';
import { connect } from 'react-redux';
import { toggleLoginModal, toggleSignupModal } from '../actions';

export const LandingRTopNav = props => {
  return(
    <div className="right-nav">
      <a href="#login-form" onClick={() => props.dispatch(toggleLoginModal())}>login</a>
      <a href="#signup-form" onClick={() => props.dispatch(toggleSignupModal())}>signup</a>
    </div>
  );
};

export default connect()(LandingRTopNav);