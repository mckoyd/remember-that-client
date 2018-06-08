import React from 'react';
const logo = require('../rememberThatIcon.ico');

export const LTopNav = () => (
  <div className="left-nav">
    <img src={logo}
      alt="RememberThat! logo, a post-it note with Remember That written in bold."
      onClick={() => console.log('`RememberTHAT!` icon link ready')}/>
    <a href="#ious" onClick={() => console.log('`RememberTHAT!` text link ready.')}>Remember THAT!</a>
  </div>
);