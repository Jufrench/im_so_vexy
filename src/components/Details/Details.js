import React from 'react';
import { useHistory } from 'react-router-dom';

const Details = props => {
   const history = useHistory();
   const country = props.location.state;

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
         </div>
      </React.Fragment>
   )
}

export default Details;
