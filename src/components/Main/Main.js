import React, { Component } from 'react';
import Search from '../Search/Search';
import Region from '../Region/Region';
import CountryItem from '../CountryItem/CountryItem';

class Main extends Component {
   render() {
      return (
         <main>
            <div className="below-header">
               <Search onSearchChange={this.props.onSearchChange} />
               <div>{this.props.searchTerm}</div>
               <Region onRegionChange={this.props.onRegionChange} />
            </div>
            <ul className="main-ul">

               {this.props.countries_visible.map(country => (
                  <CountryItem key={country.name} country={country} />
               ))}

            </ul>
         </main>
      )
   }
}

export default Main;
