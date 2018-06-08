import React from 'react';
import { connect } from 'react-redux';
import { TopNav } from './TopNav';
import { IOUBanner } from './IOUBanner';
import IOUTotal from './IOUTotal';
import IOUTable from './IOUTable';
import IOUAddForm from './IOUAddForm';

import { UOMeBanner } from './UOMeBanner'; 
import UOMeTotal from './UOMeTotal';
import UOMeTable from './UOMeTable';
import UOMeAddForm from './UOMeAddForm';

import { ReceiptBanner } from './ReceiptBanner';
import ReceiptTotal from './ReceiptTotal';
import ReceiptTable from './ReceiptTable';
import ReceiptAddForm from './ReceiptAddForm';

import { fetchIous } from '../actions/iouActions';
import { fetchUomes } from '../actions/uomeActions';
import { fetchReceipts } from '../actions/receiptActions';

export class Dashboard extends React.Component{
  componentWillMount(){
    this.props.dispatch(fetchIous());
    this.props.dispatch(fetchUomes());
    this.props.dispatch(fetchReceipts());
  }
  
  render(){
    return(
      <div>
        <TopNav />
        <IOUBanner />
        <div className='side-by-side'>
          <IOUTotal />
          <IOUTable />
        </div>
        <IOUAddForm />
        <UOMeBanner />
        <div className='side-by-side alt-row'>
          <UOMeTotal />
          <UOMeTable />
        </div>
        <UOMeAddForm />
        <ReceiptBanner />
        <div className='side-by-side'>
          <ReceiptTotal />
          <ReceiptTable />
        </div>
        <ReceiptAddForm />
      </div>
    );
  }
}

export default connect()(Dashboard);