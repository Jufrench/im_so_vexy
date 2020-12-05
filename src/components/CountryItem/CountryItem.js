import React from 'react';
// import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CountryItem.scss';

// const CountryItem = props => {
//    const country = props.country;

//    const countryDetails = {
//       name: country.name,
//       nativeName: country.nativeName,
//       population: country.population,
//       region: country.region,
//       subregion: country.subregion,
//       capital: country.capital,
//       topLevelDomain: country.topLevelDomain,
//       currencies: country.currencies.map(currency => currency.name),
//       languages: country.languages.map(lang => lang.name),
//       // borders: changeAbbrToFullName(),
//       borders: country.borders,
//    };

//    return (
//       <li className="country-item">
//          <Link
//             className="country-inner"
//             to={{
//                pathname: `/details/${props.country.name}`,
//                state: countryDetails
//             }}>
//             <img
//                className="country-flag"
//                src={props.country.flag}
//                alt={"Flag of " + country.name} />
//             <div className="text-wrap">
//                <h2 className="country-name">{props.country.name}</h2>
//                <p className="population"><span>Population:</span> {props.country.population}</p>
//                <p className="region"><span>Region:</span> {props.country.region}</p>
//                <p className="capital"><span>Capital:</span> {props.country.capital}</p>
//             </div>
//          </Link>
//       </li>
//    )
// }

// class CountryItem extends Component {
//    // const country = props.country;
//    // console.log(country);

//    handleSetActiveCountry = () => {
//       this.props.setActiveCountry(this.props.country);
//    }

//    render() {
//       return (
//          <li className="country-item">
//             <Link
//                onClick={this.handleSetActiveCountry}
//                className="country-inner"
//                // to={{
//                //    pathname: `/details/${this.props.country.name}`,
//                //    state: {
//                //       countryName: this.props.country.name
//                //    }
//                // }}
//                to={{
//                   pathname: `/details/${this.props.country.name}`
//                }}
//                // to=""
//                >
//                <img
//                   className="country-flag"
//                   src={this.props.country.flag}
//                   alt={"Flag of " + this.props.country.name} />
//                <div className="text-wrap">
//                   <h2 className="country-name">{this.props.country.name}</h2>
//                   <p className="population"><span>Population:</span> {this.props.country.population}</p>
//                   <p className="region"><span>Region:</span> {this.props.country.region}</p>
//                   <p className="capital"><span>Capital:</span> {this.props.country.capital}</p>
//                </div>
//             </Link>
//          </li>
//       )
//    }
// }

// class CountryItem extends Component {

//    handleSetActiveCountry = () => {
//       this.props.setActiveCountry(this.props.country);
//    }

//    render() {
//       return (
//          <li className="country-item">
//             <Link
//                onClick={this.handleSetActiveCountry}
//                className="country-inner"
//                to={{
//                   pathname: `/${this.props.country.name}`,
//                   state: { fromHome: true }
//                }}>
//                <img
//                   className="country-flag"
//                   src={this.props.country.flag}
//                   alt={"Flag of " + this.props.country.name} />
//                <div className="text-wrap">
//                   <h2 className="country-name">{this.props.country.name}</h2>
//                   <p className="population"><span>Population:</span> {this.props.country.population}</p>
//                   <p className="region"><span>Region:</span> {this.props.country.region}</p>
//                   <p className="capital"><span>Capital:</span> {this.props.country.capital}</p>
//                </div>
//             </Link>
//          </li>
//       )
//    }
// }

const CountryItem = props => {
   const location = useLocation();
   // console.log(location);

   const handleSetActiveCountry = () => {
      // if you want to pass in the whole object
      props.setActiveCountry(props.country);
      // console.log(props.country);

      // if you want to pass in the alpha 3 code
      // props.setActiveCountry(props.country.alpha3Code);
      // console.log(props.country.alpha3Code);

   }

   const addToVisitedCountries = countryToAdd => {
      props.addToVisitedCountries(countryToAdd);
   }

   const manageClickEvents = () => {
      handleSetActiveCountry();
      addToVisitedCountries(location.pathname);
      // setTimeout(() => {
      //    console.log('location.pathname', location.pathname);
      // }, 2000);
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
