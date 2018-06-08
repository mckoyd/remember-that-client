import React from 'react';
import {connect} from 'react-redux';
import { toggleSideNav } from '../actions';

const mapStateToProps = state => ({
  sideNavView: state.main.sideNavView
});

export const RTopNav = props => {
  if (!props.dispatch) return <h1>UNCONNECTED</h1>;
  return(
    <div className="right-nav">
      <div className="menu-icon" 
        onClick={() => props.dispatch(toggleSideNav())}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <a href="#menu">Memory Bank</a> */}
    </div>
  );};

export default connect(mapStateToProps)(RTopNav);