import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
// import * as CountriesAPI from '../../CountriesAPI';

// const BorderCountry = props => {
//     // console.log('%c=== BorderCountry Page ===', 'color: gold');
//     // console.log(props);
//     // props.currencies.forEach(currency => {
//     //     console.log(currency.name);
//     // });
//     // console.log(props);

//     // const currencies = props.currencies.map(currency => currency.name);
//     // console.log(currencies);

//     // fetch(`https://restcountries.eu/rest/v2/name/${props.borderCountryName}`)
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         console.log(props.borderCountryName);
//     //         console.log(data);
//     //     })
//     //     .catch(err => console.error(err));

//     // const countryDetails = {
//     //     source: 'border_country',
//     //     name: props.borderCountryName,
//     //     nativeName: props.nativeName,
//     //     population: props.population,
//     //     region: props.region,
//     //     subregion: props.subregion,
//     //     capital: props.capital,
//     //     topLevelDomain: props.topLevelDomain,
//     //     // currencies: props.currencies.map(currency => currency.name),
//     //     // languages: props.languages.map(lang => lang.name),
//     //     borders: props.borders,
//     //     // borders: [],
//     //  };

//     const handleSetActiveCountry = () => {
//         this.props.setActiveCountry(this.props.country);
//     }

//     return (
//         <li>
//             <Link 
//                 onClick={handleSetActiveCountry}
//                 to={{ pathname=`/details/%{props.borderCountryName}` }}>
//                 {props.borderCountryName}
//             </Link>
//         </li>
//     );
// }

// class BorderCountry extends Component {

//     // getAllCountries = () => {
//     //     let updatedCountries = CountriesAPI.getAllCountries()
//     //         .then(res => {
//     //             console.log('/// INSIDE THE PROMISE ///');
//     //             console.log(res);
//     //             allCountries = res;
//     //         })
//     //         .catch(err => console.log('Error', err));

//     //     return allCountries;
//     // }

//     handleSetActiveCountry = () => {
//         this.props.allCountries.forEach(countryItem => {
//             if (this.props.borderCountryName === countryItem.name) {
//                 this.props.setActiveCountry(countryItem);
//             }
//         });
//     }

//     render() {
//         return (
//             <li >
//                 <Link 
//                     onClick={this.handleSetActiveCountry}
//                     to={{ pathname: `/details/${this.props.borderCountryName}` }}
//                     >
//                     {this.props.borderCountryName}
//                 </Link>
//             </li>
//         );
//     }
// }

const BorderCountry = props => {

    // getAllCountries = () => {
    //     let updatedCountries = CountriesAPI.getAllCountries()
    //         .then(res => {
    //             console.log('/// INSIDE THE PROMISE ///');
    //             console.log(res);
    //             allCountries = res;
    //         })
    //         .catch(err => console.log('Error', err));

    //     return allCountries;
    // }

    const history = useHistory();

    // console.log('%cBorder Country Component', 'color: tomato', history);

    const handleSetActiveCountry = () => {
        // props.allCountries.forEach(countryItem => {
        //     if (props.borderCountryName === countryItem.name) {
        //         props.setActiveCountry(countryItem);
        //     }
        // });

        props.setActiveCountry(history.location.state);

    }

    return (
        <li >
            <Link 
                onClick={handleSetActiveCountry}
                to={{ pathname: `/details/${props.borderCountryName}` }}
                >
                {props.borderCountryName}
            </Link>
        </li>
    );
}

export default BorderCountry;

