import React from 'react';
import { Link } from 'react-router-dom';

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
      languages: country.languages.map(lang => lang.name)
   };

   // if (countryDetails.name === 'Zimbabwe') {
   //    if (countryDetails.currencies.name)
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
      <li className="country">
         <Link
            to={{
               pathname: `/details/${props.country.name}`,
               state: countryDetails
            }}>
            <div className="country-inner">
              <h2 className="country-name">{props.country.name}</h2>
              <img className="country-flag" src={props.country.flag} />
            </div>
         </Link>
      </li>
   )
}

export default CountryItem;
