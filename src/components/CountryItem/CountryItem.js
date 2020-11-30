import React from 'react';
import { Link } from 'react-router-dom';
import './CountryItem.scss';

const CountryItem = props => {
   const country = props.country;

   // console.log(name,nativeName);
   const countryDetails = {
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital,
      topLevelDomain: country.topLevelDomain,
      currencies: country.currencies.map(currency => currency.name),
      // currencies: country.currencies.map(currency => {
      //    if (currency.name) {
      //       return currency.name;
      //    }
      // }),
      languages: country.languages.map(lang => lang.name),
      borders: country.borders
   };

   // if (countryDetails.name === "United States Minor Outlying Islands") {
   //    console.log(countryDetails);
   // }

   return (
      // <li className="country">
      //    <Link to="/path">
      //       <div className="country-inner">
      //         <h2 className="country-name">{props.country.name}</h2>
      //         <img className="country-flag" src={props.country.flag} />
      //       </div>
      //    </Link>
      // </li>
      // =======================
      // <li className="country">
      //    <Link to={{
      //       // pathname: `/details/${props.country.name}`
      //       pathname: '/details',
      //       state: {
      //          text: 'waddup baby'
      //       }
      //    }}>
      //       <div className="country-inner">
      //         <h2 className="country-name">{props.country.name}</h2>
      //         <img className="country-flag" src={props.country.flag} />
      //       </div>
      //    </Link>
      // </li>
      // =======================
      <li className="country-item">
         <Link
            className="country-inner"
            to={{
               pathname: `/details/${props.country.name}`,
               state: countryDetails
            }}>
            <img
               className="country-flag"
               src={props.country.flag}
               alt={"Flag of " + country.name} />
            <div className="text-wrap">
               <h2 className="country-name">{props.country.name}</h2>
               <p className="population"><span>Population:</span> {props.country.population}</p>
               <p className="region"><span>Region:</span> {props.country.region}</p>
               <p className="capital"><span>Capital:</span> {props.country.capital}</p>
            </div>
         </Link>
      </li>
   )
}

export default CountryItem;
