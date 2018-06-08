import React from 'react';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';

import '../styles/receipt-add-form.css';
import { toggleReceiptAddForm, postReceipt } from '../actions/receiptActions';

const mapStateToProps = state => ({
  modalFormView: state.receipts.modalFormView
});

export const ReceiptAddForm = props => (
  <div id="receipt-add-form" 
    className={`modal ${props.modalFormView ? 'visible': ''}`}>
    <div className="modal-content">
      <button className="btn" 
        id="home-btn" 
        onClick={() => props.dispatch(toggleReceiptAddForm())}>go back
      </button>
      <form onSubmit={props.handleSubmit(values => {
        props.dispatch(postReceipt(values));
        props.reset();
      })}>
        <fieldset>
          <legend>ADD YOUR RECEIPT HERE</legend>
          <label htmlFor="vendorName">Who Is the Vendor</label>
          <Field type="text" 
            component="input"
            name="vendorName"
            id="vendorName" 
            className="inputBox" 
            placeholder="enter a vendor" 
            required 
          />
          <label htmlFor="vendorAmount">How Much Did You Pay</label>
          <Field type="number" 
            name="vendorAmount"
            component="input" 
            id="vendorAmount" 
            className="inputBox" 
            placeholder="enter an amount" 
            required />
          <button type="submit" 
            name="add-btn" 
            id="add-btn">Add Receipt
          </button>
        </fieldset>
      </form>
    </div> 
  </div>
);


export default connect(mapStateToProps)(reduxForm({
  form: 'addReceipt', destroyOnUnmount: false
})(ReceiptAddForm));