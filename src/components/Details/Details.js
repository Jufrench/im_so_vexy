import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory  } from 'react-router-dom';
import * as CountriesAPI from '../.././CountriesAPI';
import BorderCountry from '../BorderCountry/BorderCountry';

// const CountryPage = props => {
//    // DETAILS 3 =======
//    const location = useLocation();
//    // let match = useRouteMatch();
//    // console.log(match);

//    const handleSetActiveCountry = event => {
//       const text = event.target.text;

//       let countryToSetActive = props.allCountries.map(countryObj => {
//          let temp;
//          if (text === countryObj.name) {
//             temp = countryObj;
//          }
//          return temp;
//       });
//       props.setActiveCountry(countryToSetActive);
//    }

//    const addToVisitedCountries = countryToAdd => {
//       props.addToVisitedCountries(countryToAdd);
//    }

//    const removeFromVisitedCountries = () => {
//       props.removeFromVisitedCountries();
//    }

//    const handleBorderCountryClick = event => {
//       handleSetActiveCountry(event);
//       addToVisitedCountries(location.pathname);
//    }

//    const handleBackButtonClick = () => {
//       props.updateAfterGoingBack();
//       removeFromVisitedCountries();
//    }

//    const handleButtonToHomeClick = () => {
//       removeFromVisitedCountries();
//       props.handleShowAllCountries();
//    }

//    if (props.visitedCountries.length === 1) {
//       return (

//          <React.Fragment>
//             {/* <Link to="/" onClick={handleBackButtonClick}>Back</Link> */}
//             <Link to="/" onClick={handleButtonToHomeClick}>Back</Link>
//             <h1>{props.activeCountry.name}</h1>
//             <hr />
//             <ul>
//                {props.activeCountry.borders.map((borderItem, i) => (   
//                   <li key={i}>
//                      <Link 
//                         to={{ pathname: `/${borderItem}` }}
//                         onClick={handleBorderCountryClick}>
//                         {borderItem}
//                      </Link>
//                   </li>
//                ))}
//             </ul>
//          </React.Fragment>

//          )
//    } else {
//       return (

//          <React.Fragment>
//             {/* <button onClick={() => history.goBack()}>Back</button> */}
//             {/* <button onClick={handleBackButtonClick}>Back</button> */}
//             <Link 
//                to={{ pathname: `/${props.visitedCountries[props.visitedCountries.length-1]}` }}
//                onClick={handleBackButtonClick}>
//                   Back
//                </Link>
//             <h1>{props.activeCountry.name}</h1>
//             <hr />
//             <p>{props.activeCountry.population}</p>
//             <ul>
//                {props.activeCountry.borders.map((borderItem, i) => (   
//                   <li key={i}>
//                      <Link 
//                         to={{ pathname: `/${borderItem}` }}
//                         onClick={handleBorderCountryClick}>
//                         {borderItem}
//                      </Link>
//                   </li>
//                ))}
//             </ul>
//          </React.Fragment>

//       )
//    }
// }

const CountryPage = props => {
   // DETAILS 4 =======
   const location = useLocation();
   const urlCode = location.pathname.slice(1, location.pathname.length);
   const history = useHistory();
   // console.log(location);

   // console.log('CountryPage #4 props', props);
   // const value = CountriesAPI.getCountry(props.activeCountry);

   // USING PROPS
   // const the_country = CountriesAPI.getCountry(props.activeCountryCode);

   // USING LOCATION
   const the_country = CountriesAPI.getCountry(urlCode);
   const borderCountries = CountriesAPI.getBorderCountriesCodes(the_country.borders);
   // console.log('borderCountries', borderCountries);

   // console.log('props', props);

   const handleSetActiveCountry = event => {
      // console.log('handleSetActiveCountry', event.target.parentElement.dataset.alpha3code);
      // console.log('new border country', CountriesAPI.getCountry(event.target.parentElement.dataset.alpha3code));
      const borderCountry = CountriesAPI.getCountry(event.target.parentElement.dataset.alpha3code);
      props.setActiveCountry(borderCountry);
   }

   const addToVisitedCountries = countryToAdd => {
      // console.log('add to visited countries');
      props.addToVisitedCountries(countryToAdd);
      // console.log(props.visitedCountries);
   }

   const handleClickEvents = event => {
      handleSetActiveCountry(event);
      addToVisitedCountries(the_country.alpha3Code);
   }

   const handleBackButtonClick = () => {
      history.goBack();
      const previousCountryCode = props.visitedCountries[props.visitedCountries.length - 1];
      
      props.setActiveCountry(CountriesAPI.getCountry(previousCountryCode));
      props.removeFromVisitedCountries();
   }

   const handleButtonToHomeClick = () => {
      props.removeFromVisitedCountries();
      props.handleShowAllCountries();
   }

   return (
      <div>
         {props.visitedCountries.length === 1 ?
            <Link to="/" onClick={handleButtonToHomeClick}>Back</Link> :
            <button onClick={handleBackButtonClick}>Back</button>
         }
         {/* <button onClick={handleBackButtonClick}>Back</button> */}
         {/* {console.log(props.visitedCountries.length)} */}
         <hr />
         <h1>{the_country.name} ({the_country.alpha3Code})</h1>
         <ul>
            {borderCountries.map((borderItem, i) => (
               // <li key={i}>
               //    <Link to="">
               //       {borderItem}
               //    </Link>
               // </li>

               // using pathname inside of "to"
               // =========
               <li key={i} data-alpha3code={borderItem.alpha3Code}>
                  <Link 
                     to={{
                        pathname: `/${borderItem.alpha3Code}`
                     }}
                     onClick={handleClickEvents}>
                     {borderItem.name} ({borderItem.alpha3Code})
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default CountryPage;
