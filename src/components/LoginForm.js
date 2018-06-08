import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';

import '../styles/login-form.css';
import { toggleLoginModal } from '../actions';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

const mapStateToProps = state => ({
  loginModalView: state.main.loginModalView
});

export class LoginForm extends React.Component{
  render(){
    return(
      <div id='login-form'
        className={`modal ${this.props.loginModalView ? 'visible': ''}`}>
        <div className="modal-content">
          <button className="btn" 
            id="login-home-btn" 
            onClick={() => this.props.dispatch(toggleLoginModal())}>go back
          </button>
          <form onSubmit={this.props.handleSubmit(values => {
            this.props.dispatch(login(values.username, values.password));
            this.props.reset();
            this.props.dispatch(toggleLoginModal());
          })}>
            <fieldset>
              <legend>LOG IN HERE</legend>
              <label htmlFor="username">So What Do We Call You?</label>
              <Field type="text" 
                component="input"
                name="username"
                id="username" 
                className="inputBox" 
                placeholder="enter your username" 
                validate={[required, nonEmpty]}
              />
              <label htmlFor="login-password">And What Is the Password?</label>
              <Field type="password" 
                name="password"
                component="input" 
                id="login-password" 
                className="inputBox" 
                placeholder="enter your password" 
                validate={[required, nonEmpty]} />
              <button type="submit" 
                name="login-btn" 
                id="login-btn"
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
  form: 'loginForm', 
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
})(LoginForm));

