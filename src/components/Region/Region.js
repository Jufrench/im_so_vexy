import React, { Component } from 'react';
import './Region.scss'

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
         <section className="regions">
            <select
               name="regions"
               placeholder="Filter by region" onChange={this.handleRegionChange}
               ref={this.selectRef} >
               <option value="0">Filter by region</option>
               <option value="Americas">Americas</option>
               <option value="Africa">Africa</option>
               <option value="Asia">Asia</option>
               <option value="Europe">Europe</option>
               <option value="Oceania">Oceania</option>
               <option value="Polar">Polar</option>
            </select>
         </section>
      )
   }
}

export default Region;
