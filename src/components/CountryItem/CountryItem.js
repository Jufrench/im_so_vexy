import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CountryItem.scss';

const CountryItem = props => {
   const location = useLocation();

   const handleSetActiveCountry = () => {
      props.setActiveCountry(props.country);
   }

   const addToVisitedCountries = countryToAdd => {
      props.addToVisitedCountries(countryToAdd);
   }

   const manageClickEvents = () => {
      handleSetActiveCountry();
      addToVisitedCountries(location.pathname);
   }

   // const theHeight = () => {
   //    document.querySelectorAll('.country-flag')[0].
   // }

   const backImg = {
      backgroundImage: `url(${props.country.flag})`
   }

   return (
      <li className="country-item" data-alpha3code={props.country.alpha3Code}>
         <Link
            className="country-inner"
            onClick={manageClickEvents}
            to={{ pathname: `/${props.country.alpha3Code}` }}>
            <img
               className="country-flag"
               src={props.country.flag}
               alt={"Flag of " + props.country.name} />
            {/* <div className="backimg"style={backImg}>
               <img src={props.country.flag} alt={"Flag of " + props.country.name} />
            </div> */}
            <div className="text-wrap">
               <h2 className="country-name">{props.country.name}</h2>
               <p className="population"><span>Population:</span> {props.country.population}</p>
               <p className="region"><span>Region:</span> {props.country.region}</p>
               <p className="capital">
                  <span>Capital:</span> {props.country.capital !== '' ? props.country.capital : 'n/a'}
               </p>
            </div>
         </Link>
      </li>
   )
}

export default CountryItem;
