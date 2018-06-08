import React from 'react';
import { connect } from 'react-redux';
import '../styles/iou-total.css';
import { toggleIouAddForm } from '../actions/iouActions';

const mapStateToProps = state => ({
  iouTotal: state.ious.iouDetails.map(iou => iou.iouAmount).reduce((a,b) => 
    a + b, 0),
});

export const IOUTotal = props => {
  if (!props.dispatch) return <h1>UNCONNECTED</h1>;
  return(
    <section className='iou-total'>
      <h2>You currently owe $<span>{props.iouTotal.toLocaleString(undefined,
        {'minimumFractionDigits':2,'maximumFractionDigits':2})}</span><br />
      <button type='button' 
        name='add-form-btn' 
        onClick={() => props.dispatch(toggleIouAddForm())}>Add an IOU</button>
      </h2>
    </section>
  );};

export default connect(mapStateToProps)(IOUTotal);