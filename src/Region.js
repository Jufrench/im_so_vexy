import React, { Component } from 'react';

// Filter country list by selecting region

class Region extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <select name="regions" id="regions">
            <option value="Americas"></option>
            <option value="Asia"></option>
            <option value="African"></option>
            <option value="Europe"></option>
            <option value="Oceania"></option>
            <option value="Polar"></option>
         </select>
      )
   }
}

export default Region;
