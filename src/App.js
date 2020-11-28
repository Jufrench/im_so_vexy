import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import * as FlagsAPI from './FlagsAPI';
import Search from './Search';
import Region from './Region';

// https://main.d3kiifg2k1bcmx.amplifyapp.com/

const data_countries = [];

class App extends Component {
   state = {
      countries_visible: [],
      searchTerm: '',
      // region:
   }

   componentDidMount() {
      FlagsAPI.getAllCountries()
         .then(res => {
            res.forEach((item) => {
               data_countries.push(item);
            });

            this.setState(() => {
               return { countries_visible: data_countries };
            });
         });
   }

   handleSearchChange = searchInputValue => {
      this.setState({
         searchTerm: searchInputValue
      });
   }

   filterCountry = (searchInputValue, value) => {
      if (value.tagName === 'INPUT') {
         searchInputValue = searchInputValue.toLowerCase();
         this.setState({
            countries_visible: data_countries.filter(country => country.name.toLowerCase().includes(searchInputValue))
         });
      }
   }

   render() {
      return (
         <div className="App">
          <header className="header">
             <h1>I'm So Vexy!</h1>
             <p>Under Construction...</p>
          </header>
          <main>
            <div className="below-header">
               <Search onSearchChange={this.handleSearchChange} onFilter={this.filterCountry} />
               <div>{this.state.searchTerm}</div>
            </div>
            <ul className="main-ul">
             {this.state.countries_visible.map(country => (
                <li
                key={country.name}
                className="country">
                <div className="country-inner">
                  <h2 className="country-name">{country.name}</h2>
                  <img className="country-flag" src={country.flag} />
                </div>
                </li>
             ))}
             </ul>
          </main>
         </div>
     )
   }

}

export default App;
