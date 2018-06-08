import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import '../styles/side-nav.css';
import { toggleSideNav } from '../actions';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

const mapStateToProps = state => ({
  sideNavView: state.main.sideNavView
});

export class SideNav extends React.Component{ 
  render(){
    return(
      <nav id="menu" className={this.props.sideNavView ? 'visible' : ''}>
        <p onClick={() => this.props.dispatch(toggleSideNav())}>X</p>
        <ul className="links">
          <li>
            <a href="#ious" 
              onClick={() => this.props.dispatch(toggleSideNav())}>IOWEU'S
            </a>
          </li>
          <li>
            <a href="#uomes" 
              onClick={() => this.props.dispatch(toggleSideNav())}>UOME'S
            </a>
          </li>
          <li>
            <a href="#receipts" 
              onClick={() => this.props.dispatch(toggleSideNav())}>RECEIPTS
            </a>
          </li>
          <li>
            <a href="#logout" 
              onClick={() => {
                this.props.dispatch(clearAuth());
                clearAuthToken();
                this.props.dispatch(toggleSideNav());
                this.props.history.push('/');
              }
              }>LOG OUT
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(connect(mapStateToProps)(SideNav));