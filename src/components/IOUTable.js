import React from 'react';
import { connect } from 'react-redux';
import '../styles/iou-table.css';
import { deleteIou } from '../actions/iouActions';

const mapStateToProps = state => ({
  ious: state.ious.iouDetails
});

export const IOUTable = props => {
  if (!props.dispatch) return <h1>UNCONNECTED</h1>;
  const iouRow = props.ious.map((iou, i) => 
    <tr key={i}>
      <td key={`${iou.id}name`}>
        <details>
          <summary>{iou.iouName}</summary>
          <button type='submit' 
            name='delete-btn' 
            className='delete-btn' 
            onClick={() =>props.dispatch(deleteIou(iou))}>delete iou
          </button>
          <button type='button' name='iou-details-btn' className='iou-details-btn'>view details</button>
        </details>
      </td>
      <td key={`${iou.id}amount`}>
        $ {iou.iouAmount.toLocaleString(undefined,
          {'minimumFractionDigits':2,'maximumFractionDigits':2})}
      </td>
    </tr>
  );
  return(
    <section className='iou-table'>
      <table>
        <thead className='iou-header'>
          <tr>
            <th>Who You Owe</th>
            <th>What You Owe</th>
          </tr>
        </thead>
        <tbody>
          {iouRow}
        </tbody>
      </table> 
    </section>
  );
};

export default connect(mapStateToProps)(IOUTable);