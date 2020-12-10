import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

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

   const handleToggleLightDarkMode = event => {
      let lightDarkMode;
      if (event.target.value === 'dark') {
         lightDarkMode = true;
      } else {
         lightDarkMode = false;
      }

      props.toggleLightDarkMode(lightDarkMode);
   }

   // const buttonToShow = () => {
   //    let result;
   //    props.darkModeState ?
   //    result = 
   //    <button className="toggle-darkmode-btn" onClick={handleToggleLightDarkMode}><i className="far fa-sun"></i>Light</button>
   //    :
   //    result = 
   //    <button className="toggle-darkmode-btn" onClick={handleToggleLightDarkMode}><i className="far fa-moon"></i>Dark</button>
   //    return result;
   // }

   return (
      <header className="header do-flex box-shadow">
         {/* <h1>I&apos;m So Vexy!</h1> */}
         <h1><Link to="/">I&apos;m So Vexy!</Link></h1>
         <div className="light-dark">
            {/* {buttonToShow()} */}
            {/* <button onClick={handleToggleLightDarkMode}>Light/Dark Mode</button> */}
         </div>
            {/* <div className="radio-buttons">
               <div className="radio-light-wrap">
                  <input id="radio-light" type="radio" name="toggle-light-dark"/>
                  <label for="radio-light">Light</label>
               </div>
               
               <div className="radio-dark-wrap">
                  <input id="radio-dark" type="radio" name="toggle-light-dark"/>
                  <label for="radio-dark">Dark</label>
               </div>
            </div> */}
         {/* <div className="radio-wrap">
               <form onChange={handleToggleLightDarkMode}>
                  <input id="radio-light" type="radio" name="toggle-light-dark" value="light"/>
                  <label htmlFor="radio-light"><span className="far fa-sun"></span></label>
                  <input id="radio-dark" type="radio" name="toggle-light-dark" value="dark" />
                  <label htmlFor="radio-dark"><span className="far fa-moon"></span></label>
                  <div className="circle-wrap"><div className="circle"></div></div>
               </form>
         </div> */}

         <div className="radio-wrap">
            {/* <div className="radio-wrap-inner"> */}
               <form onChange={handleToggleLightDarkMode}>
                  {/* <div className="inner-wrap">
                     <span className="far fa-sun"></span>
                     <div className="input-circle-wrap">
                        <label htmlFor="light"></label>
                        <input id="light" type="radio" name="toggle-light-dark" value="light" />
                        <input id="dark" type="radio" name="toggle-light-dark" value="dark" />
                        <label htmlFor="dark"></label>
                        <div className="circle"></div>
                     </div>
                     <span className="far fa-moon"></span>
                  </div> */}

                  <div className="inner-wrap">
                     <div className="input-circle-wrap">
                        <input id="light" type="radio" name="toggle-light-dark" value="light" />
                        <label className="for-light" htmlFor="light"><span className="far fa-sun"></span></label>
                        <input id="dark" type="radio" name="toggle-light-dark" value="dark" />
                        <label className="for-dark" htmlFor="dark"><span className="far fa-moon"></span></label>
                        <div className="circle"></div>
                     </div>
                  </div>
               </form>
            {/* </div> */}
         </div>
      </header>
   )
}

export default Header;
