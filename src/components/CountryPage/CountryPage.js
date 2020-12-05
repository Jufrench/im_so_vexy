import React from 'react';
import { Link, useLocation, useHistory  } from 'react-router-dom';
import * as CountriesAPI from '../../CountriesAPI';
import BorderCountry from '../BorderCountry/BorderCountry';

const CountryPage = props => {
   const location = useLocation();
   const urlCode = location.pathname.slice(1, location.pathname.length);
   const history = useHistory();

   // USING LOCATION
   const the_country = CountriesAPI.getCountry(urlCode);
   const borderCountries = CountriesAPI.getBorderCountriesCodes(the_country.borders);

   const handleSetActiveCountry = event => {
      const borderCountry = CountriesAPI.getCountry(event.target.parentElement.dataset.alpha3code);
      props.setActiveCountry(borderCountry);
   }

   const handleAddToVisitedCountries = countryToAdd => {
      props.addToVisitedCountries(countryToAdd);
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

     // if using border country component, comment out this below.
   // const handleClickEvents = event => {
   //    handleSetActiveCountry(event);
   //    handleAddToVisitedCountries(the_country.alpha3Code);
   // }

   return (
      <div>
         {props.visitedCountries.length === 1 ?
            <Link to="/" onClick={handleButtonToHomeClick}>Back</Link> :
            <button onClick={handleBackButtonClick}>Back</button>
         }
         <hr />
         <h1>{the_country.name}</h1>
         <img src={the_country.flag} alt={"Flag of " + the_country.name}></img>
         <p><span>Capital: </span>{the_country.capital}</p>
         <p>{the_country.population}</p>
         <ul>
            {borderCountries.map((borderItem, i) => (
               // <li key={i} data-alpha3code={borderItem.alpha3Code}>
               //    <Link 
               //       to={{
               //          pathname: `/${borderItem.alpha3Code}`
               //       }}
               //       onClick={handleClickEvents}>
               //       {borderItem.name} ({borderItem.alpha3Code})
               //    </Link>
               // </li>

               <BorderCountry 
                  key={i}
                  alpha3Code={borderItem.alpha3Code}
                  name={borderItem.name}
                  setActiveCountry={handleSetActiveCountry}
                  visitedCountry={the_country.alpha3Code}
                  addToVisitedCountries={handleAddToVisitedCountries} />
            ))}
         </ul>
      </div>
   )
}

export default CountryPage;
