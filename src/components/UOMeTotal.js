import React from 'react';
import { connect } from 'react-redux';
import { toggleUomeAddForm } from '../actions/uomeActions';
import '../styles/uome-total.css';

const mapStateToProps = state => ({
  uomeTotal: state.uomes.uomeDetails.map(uome => uome.uomeAmount).reduce((a,b) => 
    a + b, 0),
  modalFormView: state.uomes.modalFormView
});

export class UOMeTotal extends React.Component{
  render(){
    if (!this.props.dispatch) return <h1>UNCONNECTED</h1>;
    return(
      <section className='uome-total'>
        <h2>You are currently owed <br/>$<span>{this.props.uomeTotal.toLocaleString(undefined,
          {'minimumFractionDigits':2,'maximumFractionDigits':2})}</span><br />
        <button type='button' name='add-form-btn' onClick={() => this.props.dispatch(toggleUomeAddForm())}>Add a UOMe</button>
        </h2>
      </section>
    );
  }
}

export default connect(mapStateToProps)(UOMeTotal);