import React from 'react';
import { Link, useLocation, useHistory  } from 'react-router-dom';
import * as CountriesAPI from '../../CountriesAPI';
import BorderCountry from '../BorderCountry/BorderCountry';

const CountryPage = props => {
   const location = useLocation();
   const urlCode = location.pathname.slice(1, location.pathname.length);
   const history = useHistory();

   // USING PROPS
   // const the_country = CountriesAPI.getCountry(props.activeCountryCode);

   // USING LOCATION
   const the_country = CountriesAPI.getCountry(urlCode);
   const borderCountries = CountriesAPI.getBorderCountriesCodes(the_country.borders);

   const handleSetActiveCountry = event => {
      const borderCountry = CountriesAPI.getCountry(event.target.parentElement.dataset.alpha3code);
      props.setActiveCountry(borderCountry);
   }

   const addToVisitedCountries = countryToAdd => {
      props.addToVisitedCountries(countryToAdd);
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
         <hr />
         <h1>{the_country.name} ({the_country.alpha3Code})</h1>
         <img src={the_country.flag}></img>
         <p>{the_country.population}</p>
         <ul>
            {borderCountries.map((borderItem, i) => (
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
