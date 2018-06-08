import React from 'react';
import SideNav from './SideNav';
import {LTopNav} from './LTopNav';
import RTopNav from './RTopNav';

import '../styles/top-nav.css';

export const TopNav = () => (
  <nav className="nav-bar">
    <LTopNav />
    <RTopNav />
    <SideNav />
  </nav>
);
