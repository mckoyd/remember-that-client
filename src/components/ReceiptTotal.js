import React from 'react';
import { connect } from 'react-redux';

import '../styles/receipt-total.css';
import { toggleReceiptAddForm } from '../actions/receiptActions';

const mapStateToProps = state => ({
  receiptTotal: state.receipts.receiptDetails.map(receipt => receipt.vendorAmount).reduce((a,b) => 
    a + b, 0),
  modalFormView: state.receipts.modalFormView
});

export class ReceiptTotal extends React.Component{
  render(){
    if (!this.props.dispatch) return <h1>UNCONNECTED</h1>;
    return(
      <section className='receipt-total'>
        <h2>Your total expenses are <br/>$<span>{this.props.receiptTotal.toLocaleString(undefined,
          {'minimumFractionDigits':2,'maximumFractionDigits':2})}</span><br />
        <button type='button' name='receipt-add-form-btn' onClick={() => this.props.dispatch(toggleReceiptAddForm())}>Add a Receipt</button>
        </h2>
      </section>
    );
  }
}

export default connect(mapStateToProps)(ReceiptTotal);