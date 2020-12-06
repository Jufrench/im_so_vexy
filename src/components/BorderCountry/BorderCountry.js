import React from 'react';
import { Link } from 'react-router-dom';

const BorderCountry = props => {
    const handleClickEvents = event => {
        props.setActiveCountry(event);
        props.addToVisitedCountries(props.visitedCountry);
    }

    return (
        <li 
            key={props.alpha3Code} 
            data-alpha3code={props.alpha3Code}
            className="border-country">
            <Link 
                to={{
                    pathname: `/${props.alpha3Code}`
                }}
                onClick={handleClickEvents}>
                {props.name}
            </Link>
        </li>
    );
}

export default BorderCountry;

