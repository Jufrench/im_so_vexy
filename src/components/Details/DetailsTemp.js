import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const Details = props => {
   const history = useHistory();
   const country = props.location.state;
   console.log(props);

   // const changeAbbrToFullName = () => {
   //    const bordersFullName = [];

   //    country.borders.forEach(abbr => {
   //       props.all_countries.forEach(countryItem => {
   //          if (countryItem.alpha3Code === abbr) {
   //             bordersFullName.push(countryItem.name);
   //          }
   //       })
   //    });

   //    return bordersFullName;
   // };

   // const countryDetails = {
   //    name: country.name,
   //    nativeName: country.nativeName,
   //    population: country.population,
   //    region: country.region,
   //    subregion: country.subregion,
   //    capital: country.capital,
   //    topLevelDomain: country.topLevelDomain,
   //    currencies: country.currencies.map(currency => currency.name),
   //    languages: country.languages.map(lang => lang.name),
   //    borders: changeAbbrToFullName()
   // };

   return (
      <React.Fragment>
         <button onClick={() => history.goBack()}>Back</button>
         <h1>{country.name}</h1>
         <div>
            <p>{country.nativeName}</p>
            <p>{country.population}</p>
            <p>{country.region}</p>
            <p>{country.subregion}</p>
            <p>{country.capital}</p>
            <p>{country.topLevelDomain}</p>
            <p>{country.currencies}</p>
            <p>{country.languages}</p>
            {/* {country.borders.map(bordItem => {
               return (
                  <Link 
                     key={bordItem} 
                     to={{
                        pathname: `/details/${bordItem}`,
                        // state: countryDetails
                     }}>
                     {bordItem}
                  </Link>
               );
            })} */}
         </div>
      </React.Fragment>
   )
}

export default Details;
