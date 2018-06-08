import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import '../styles/layout.css';

import Dashboard from './Dashboard';
import LandingPage from './LandingPage';

import { refreshAuthToken } from '../actions/auth';

const mapStateToProps = state => ({
  ious: state.ious.ious,
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export class Layout extends React.Component{
  componentDidUpdate(prevProps){
    if(!prevProps.loggedIn && this.props.loggedIn){
      this.startPeriodicRefresh();
    } else if(prevProps.loggedIn && !this.props.loggedIn){
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount(){
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh(){
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()), 60*60*1000
    );
  }

  stopPeriodicRefresh(){
    if(!this.refreshInterval){
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    if (!this.props.dispatch) return <h1>UNCONNECTED</h1>;
    return(
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/dashboard' component={Dashboard} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Layout));

