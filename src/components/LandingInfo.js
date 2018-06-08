import React from 'react';
import '../styles/landing-info.css';


export const LandingInfo = () => (
  <article className='landing-section'>
    <div className='landing-image'>
      <img src={'https://compeap.com/wp-content/uploads/remember.jpg'} alt="" /> 
    </div>
    <div className='content'>
      <header>
        <h2>Remember IOU'S!</h2>
        <p>and UOMe'S & Receipts</p>
      </header>
      <p>
      Keep track of who you owe, who owes you, and important receipts...
      Sign up above...already a member, login and checkout your dashboard...
      </p>
    </div>
  </article>
);