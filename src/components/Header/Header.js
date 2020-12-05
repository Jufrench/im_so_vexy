import React from 'react';
import './Header.scss';

// const Header = () => {
//    const toggleLightDarkMode = () => {
//       if (document.querySelector('.inner-wrap').classList.contains('darkmode')) {
//          document.querySelector('.inner-wrap').classList.remove('darkmode');
//       } else {
//          document.querySelector('.inner-wrap').classList.add('darkmode');
//       }
//    }

//    const textToShow = () => {
//       let result;
      
//       document.querySelector('.inner-wrap').classList.contains('darkmode') ?
//       result = 
//       <button onClick={toggleLightDarkMode}><i class="far fa-moon"></i>Dark Mode</button>
//       :
//       result = 
//       <button onClick={toggleLightDarkMode}><i class="far fa-sun"></i>Light</button>

//       return result;
//    }

//    return (
//       <header className="header do-flex">
//          <h1>I&apos;m So Vexy!</h1>
//          <div className="light-dark">
//             {textToShow()}
//             <button onClick={toggleLightDarkMode}>Light/Dark Mode</button>
//          </div>
//       </header>
//    )
// }
// ======== HEADER 2 ============
const Header = props => {

   const handleToggleLightDarkMode = () => {
      props.toggleLightDarkMode();
   }

   const buttonToShow = () => {
      let result;
      
      props.darkModeState ?
      result = 
      <button onClick={handleToggleLightDarkMode}><i className="far fa-sun"></i>Light</button>
      :
      result = 
      <button onClick={handleToggleLightDarkMode}><i className="far fa-moon"></i>Dark</button>

      return result;
   }

   return (
      <header className="header do-flex">
         <h1>I&apos;m So Vexy!</h1>
         <div className="light-dark">
            {buttonToShow()}
            {/* <button onClick={handleToggleLightDarkMode}>Light/Dark Mode</button> */}
         </div>
      </header>
   )
}

export default Header;
