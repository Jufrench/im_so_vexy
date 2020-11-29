import React, { Component } from 'react';

// Filter country list by selecting region

class Region extends Component {
   constructor(props) {
      super(props);
      this.selectRef = React.createRef();
   }

   handleRegionChange = event => {
      let selectValue = this.selectRef.current.value;
      this.props.onRegionChange(selectValue);
   }

   render() {
      return (
         <select name="regions" id="regions"
            placeholder="Filter by region" onChange={this.handleRegionChange}
            ref={this.selectRef} >
            <option value="All">All</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Polar">Polar</option>
         </select>
      )
   }
}

export default Region;
