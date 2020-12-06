import React from 'react';
import { Link, useLocation, useHistory  } from 'react-router-dom';
import * as CountriesAPI from '../../CountriesAPI';
import BorderCountry from '../BorderCountry/BorderCountry';
import './CountryPage.scss';

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
      <React.Fragment>
         <section className="back-button-wrap">
            {props.visitedCountries.length === 1 ?
               <Link to="/" onClick={handleButtonToHomeClick}><i className="fas fa-arrow-left"></i>Back</Link> :
               <Link 
                  to={{ pathname: props.visitedCountries[props.visitedCountries.length - 1] }} 
                  onClick={handleBackButtonClick}><i className="fas fa-arrow-left"></i>Back
               </Link>
            }
         </section>
         <main className="country-info-wrap">
            <img src={the_country.flag} alt={"Flag of " + the_country.name}></img>
            <div className="text-wrap">
               <h2 className="country-name">{the_country.name}</h2>
               <section className="details details-first">
                  <p className="native-nave"><span>Native Name: </span>{the_country.nativeName}</p>
                  <p className="population"><span>Population: </span>{the_country.population}</p>
                  <p className="region"><span>Region: </span>{the_country.region}</p>
                  <p className="subregion"><span>Sub Region: </span>{the_country.subregion}</p>
                  <p className="capital"><span>Capital: </span>{the_country.capital}</p>
               </section>
               <section className="details details-second">
                  <p className="top-level-domain"><span>Top Level Doman: </span>{the_country.topLevelDomain}</p>
                  <p className="currencies"><span>Currencies: </span>
                     {the_country.currencies.map((currObj, i, thisArr) => (
                        thisArr[thisArr.length - 1] === thisArr[i] ? 
                        currObj.name : currObj.name + ', '
                     ))}
                  </p>
                  <p className="languages"><span>Languages: </span>
                     {the_country.languages.map((langObj, i, thisArr) => (
                        thisArr[thisArr.length - 1] === thisArr[i] ? 
                        langObj.name : langObj.name + ', '
                     ))}
                  </p>
               </section>
               <section className="border-countries">
                  <h3 className="borders-title">Border Countries:</h3>
                  <ul>
                     {borderCountries.map((borderItem, i) => (   
                        <BorderCountry 
                           key={i}
                           alpha3Code={borderItem.alpha3Code}
                           name={borderItem.name}
                           setActiveCountry={handleSetActiveCountry}
                           visitedCountry={the_country.alpha3Code}
                           addToVisitedCountries={handleAddToVisitedCountries} />
                     ))}
                  </ul>
               </section>
            </div>
         </main>
      </React.Fragment>
   )
}

export default CountryPage;
