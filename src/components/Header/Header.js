import React from 'react';
import './Header.scss';

const Header = () => {
   return (
      <header className="header do-flex">
         <h1>I&apos;m So Vexy!</h1>
         <div className="light-dark">
            <button>Light/Dark Mode</button>
         </div>
      </header>
   )
}

export default Header;
