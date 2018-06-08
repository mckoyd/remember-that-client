import React from 'react';
import { connect } from 'react-redux';

import '../styles/receipt-table.css';
import { deleteReceipt } from '../actions/receiptActions';

const mapStateToProps = state => ({
  receipts: state.receipts.receiptDetails
});

export const ReceiptTable = props => {
  if (!props.dispatch) return <h1>UNCONNECTED</h1>;
  const receiptRow = props.receipts.map((receipt, i) => 
    <tr key={i}>
      <td key={`${receipt.id}name`}>
        <details>
          <summary>{receipt.vendorName}</summary>
          <button type='submit' 
            name='delete-btn' 
            className='delete-btn' 
            onClick={() =>props.dispatch(deleteReceipt(receipt))}>delete receipt
          </button>
          <button type='button' name='receipt-details-btn' className='receipt-details-btn'>view details</button>
        </details>
      </td>
      <td key={`${receipt.id}amount`}>
        $ {receipt.vendorAmount.toLocaleString(undefined,
          {'minimumFractionDigits':2,'maximumFractionDigits':2})}
      </td>
    </tr>
  );
  return(
    <section className='receipt-table'>
      <table>
        <thead className='receipt-header'>
          <tr>
            <th>Vendor</th>
            <th>Amount Paid</th>
          </tr>
        </thead>
        <tbody>
          {receiptRow}
        </tbody>
      </table> 
    </section>
  );
};

export default connect(mapStateToProps)(ReceiptTable);