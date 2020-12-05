import React from 'react';
import './Header.scss';

const Header = props => {
   const handleToggleLightDarkMode = () => {
      // props.toggleLightDarkMode();
      if (document.querySelector('.App > div').classList.contains('darkmode')) {
         document.querySelector('.App > div').classList.remove('darkmode');
      } else {
         document.querySelector('.App > div').classList.add('darkmode');
      }
   }

   return (
      <header className="header do-flex">
         <h1>I&apos;m So Vexy!</h1>
         <div className="light-dark">
            <button onClick={handleToggleLightDarkMode}>Light/Dark Mode</button>
         </div>
      </header>
   )
}

export default Header;
