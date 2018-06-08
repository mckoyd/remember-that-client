import React from 'react';
import { connect } from 'react-redux';

import { toggleUomeAddForm, postUome } from '../actions/uomeActions';
import { Field, reduxForm } from 'redux-form';

import '../styles/uome-add-form.css';

const mapStateToProps = props => ({
  modalFormView: props.uomes.modalFormView
});

export class UOMeAddForm extends React.Component {
  render() {
    return(
      <div id="uome-add-form" 
        className={`modal ${this.props.modalFormView ? 'visible': ''}`}>
        <div className="modal-content">
          <button className="btn" 
            id="home-btn" 
            onClick={() => this.props.dispatch(toggleUomeAddForm())}>go back
          </button>
          <form onSubmit={this.props.handleSubmit(values => {
            this.props.dispatch(postUome(values));
            this.props.reset();
          })}>
            <fieldset>
              <legend>ADD YOUR UOME HERE</legend>
              <label htmlFor="name">Who Owes You</label>
              <Field type="text" 
                component="input"
                name="uomeName"
                id="uomeName" 
                className="inputBox" 
                placeholder="enter a name" 
                required 
              />
              <label htmlFor="amount">What Do They Owe</label>
              <Field type="number" 
                name="uomeAmount"
                component="input" 
                id="uomeAmount" 
                className="inputBox" 
                placeholder="enter an amount" 
                required />
              <button type="submit" 
                name="add-btn" 
                id="add-btn">Add UOME
              </button>
            </fieldset>
          </form>
        </div> 
      </div>
    );
  }
}


export default connect(mapStateToProps)(reduxForm({
  form: 'addUOMe', destroyOnUnmount: false
})(UOMeAddForm));