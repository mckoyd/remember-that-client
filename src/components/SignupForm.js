import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';

import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

import '../styles/signup-form.css';

import { toggleSignupModal } from '../actions';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');
const mapStateToProps = state => ({
  signupModalView: state.main.signupModalView
});

export class SignupForm extends React.Component{
  render(){
    return(
      <div id='signup-form'
        className={`modal ${this.props.signupModalView ? 'visible': ''}`}>
        <div className="modal-content">
          <button className="btn" 
            id="home-btn" 
            onClick={() => this.props.dispatch(toggleSignupModal())}>go back
          </button>
          <form onSubmit={this.props.handleSubmit(values => {
            const {username, password, firstName, lastName, emailAddress} = values;
            const user = {username, password, firstName, lastName, emailAddress};
            return this.props.dispatch(registerUser(user))
              .then(() => {
                this.props.dispatch(login(username, password));
                this.props.reset();
                this.props.dispatch(toggleSignupModal());
              });
          })}>
            <fieldset>
              <legend>SIGN UP HERE</legend>
              <label htmlFor='firstName'>So What's Your First Name?</label>
              <Field type='text' component='input' name='firstName'
                id='firstName' className='inputBox' placeholder='enter your first name'/>
              <label htmlFor='lastName'>And Your Last Name?</label>
              <Field type='text' component='input' name='lastName'
                id='lastName' className='inputBox' placeholder='enter your last name'/>
              <label htmlFor='emailAddress'>Email Address?</label>
              <Field type='text' component='input' name='emailAddress'
                id='emailAddress' className='inputBox' placeholder='enter your email address'/>
              <label htmlFor='signup-username'>Ok...Pick A Username</label>
              <Field type='text' component='input' name='username'
                id='signup-username' className='inputBox' placeholder='enter a username'
                validate={[required, nonEmpty, isTrimmed]}/>
              <label htmlFor='signup-password'>Now Pick A Strong Password</label>
              <Field type='password' component='input' name='password'
                id='signup-password' className='inputBox' placeholder='enter a password'
                validate={[required, passwordLength, isTrimmed]}/>
              <label htmlFor='passwordConfirm'>Nice, Let's See If You Can Type It Again...</label>
              <Field type='password' component='input' name='passwordConfirm'
                id='passwordConfirm' className='inputBox' placeholder='enter your password again'
                validate={[required, nonEmpty, matchesPassword]}/>
              <button type="submit" 
                name="signup-btn" 
                id="signup-btn"
                disabled={this.props.pristine || this.props.submitting}>
                  Start Remembering!
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'signupForm', 
  onSubmitFail: (errors, dispatch) => dispatch(focus('signup', Object.keys(errors)[0])),
})(SignupForm));