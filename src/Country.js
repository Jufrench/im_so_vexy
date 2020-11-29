import React, { Component } from 'react';

const Country = props => {
   return (
      <li className="country">
         <div className="country-inner">
           <h2 className="country-name">{props.country.name}</h2>
           <img className="country-flag" src={props.country.flag} />
         </div>
      </li>
   )
}

export default Country;
