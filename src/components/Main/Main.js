import React, { Component } from 'react';
import CountryItem from '../CountryItem/CountryItem';
import './Main.scss';

class Main extends Component {

   render() {
      return (
         <main className="main">
            <ul className="main-ul">
               {this.props.countries_visible.map(country => (
                  <CountryItem 
                     key={country.name} 
                     country={country} 
                     all_countries={this.props.all_countries} 
                     setActiveCountry={this.props.setActiveCountry}
                     activeCountry={this.props.activeCountry} />
               ))}
            </ul>
         </main>
      )
   }
}

export default Main;
