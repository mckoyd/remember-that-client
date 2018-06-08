import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LandingTopNav } from './LandingTopNav';
import { LandingBanner } from './LandingBanner';
import {LandingInfo} from './LandingInfo';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export const LandingPage = props => {
  if(props.loggedIn){
    return <Redirect to='/dashboard' />;
  }
  return(
    <div>
      <LandingTopNav />
      <LoginForm />
      <SignupForm />
      <LandingBanner />
      <LandingInfo />
    </div>
  );
};

export default connect(mapStateToProps)(LandingPage);
