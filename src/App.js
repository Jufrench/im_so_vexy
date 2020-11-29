import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import * as FlagsAPI from './FlagsAPI';
import Search from './Search';
import Region from './Region';
import Country from './Country';
import { Route, useHistory } from 'react-router-dom';

// https://main.d3kiifg2k1bcmx.amplifyapp.com/

const data_countries = [];

class App extends Component {
   state = {
      countries_visible: [],
      searchTerm: '',
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

   handleSearchChange = inputValue => {
      this.setState({
         searchTerm: inputValue
      });

      inputValue = inputValue.toLowerCase();
      const searchResults = data_countries.filter(country => {
         return country.name.toLowerCase().includes(inputValue);
      });

      this.setState({
         countries_visible: searchResults
      });
   }

   handleRegionChange = selectValue => {
      if (selectValue === 'All') {
         this.setState({
            countries_visible: data_countries
         });
      } else {
         const filter = data_countries.filter(country => {
            return country.region === selectValue;
         });

         this.setState({
            countries_visible: filter
         });
      }
   }

   render() {

      return (
         <div className="App">
            <Route exact path="/" render={() => (
               <React.Fragment>
                  <header className="header">
                     <h1>I&apos;m So Vexy!</h1>
                     <p>Under Construction...</p>
                  </header>
                  <main>
                     <div className="below-header">
                        <Search onSearchChange={this.handleSearchChange} />
                        <div>{this.state.searchTerm}</div>
                        <Region onRegionChange={this.handleRegionChange} />
                     </div>
                     <ul className="main-ul">
                        {this.state.countries_visible.map(country => (
                           <Country key={country.name} country={country} />
                        ))}
                     </ul>
                  </main>
               </React.Fragment>
            )} />

            <Route exast path="/countryinfo" render={() => (
               <React.Fragment>
                  <button>Back</button>
                  <h2>HERE I AM!</h2>
               </React.Fragment>
            )} />
         </div>
      )
   }

}

export default App;
