import React from 'react';
import { LTopNav } from './LTopNav';
import LandingRTopNav from './LandingRTopNav';

export const LandingTopNav = () => (
  <nav className="nav-bar">
    <LTopNav />
    <LandingRTopNav />
  </nav>
);