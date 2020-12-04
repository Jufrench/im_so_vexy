import React from 'react';
import BorderCountry from '../BorderCountry/BorderCountry';

const CountryPage = props => {
    // console.log('%cCountry Page', 'color: skyblue');
    // console.log(props);
    // console.log('borders', props.country.borders);
    // let country = props.country;
    // console.log('%c=== Country Page ===', 'color: tomato');
    // console.log(props);

    // if (props.country.source === 'border_country') {
    //     country = props.country;
    //     // country.borders = [];
    // } else {
    //     country = props.country;
    // }

    // const borderCountryData = [];
    
    return (
        <div>
            <h1>{props.activeCountry.name}</h1>
            {/* <p>{country.nativeName}</p>
            <p>{country.population}</p>
            <p>{country.region}</p>
            <p>{country.subregion}</p>
            <p>{country.capital}</p>
            <p>{country.topLevelDomain}</p>
            <p>{country.currencies}</p>
            <p>{country.languages}</p> */}
            {/* <ul>
            {country.borders.map((borderItem, i) => (
                <BorderCountry 
                    key={i} 
                    borderCountryName={borderItem.name} 
                    nativeName={borderItem.nativeName} 
                    population={borderItem.population} 
                    region={borderItem.region} 
                    subregion={borderItem.subregion} 
                    capital={borderItem.capital} 
                    topLevelDomain={borderItem.topLevelDomain} 
                    currencies={borderItem.currencies} 
                    languages={borderItem.languages} 
                    borders={borderItem.borders} />
            ))}
            </ul> */}
            <ul>
            {props.activeCountry.borders.map((borderItem, i) => (
                <BorderCountry 
                    key={i} 
                    borderCountryName={borderItem}
                    setActiveCountry={props.setActiveCountry}
                    allCountries={props.allCountries} />
            ))}
            </ul>
        </div>
    )
}

export default CountryPage;