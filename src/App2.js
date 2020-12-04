import React, { Component } from 'react';
import './App.scss';
import * as CountriesAPI from './CountriesAPI';
import Header from './components/Header/Header.js';
import Search from './components/Search/Search.js';
import Region from './components/Region/Region.js';
import Main from './components/Main/Main.js';
import Details from './components/Details/Details.js';
import { Route, Switch } from 'react-router-dom';


// https://main.d3kiifg2k1bcmx.amplifyapp.com/

const data_countries = [];

class App extends Component {
   state = {
      countries_visible: [],
      searchTerm: '',
      activeCountry: ''
   }

   componentDidMount() {
      CountriesAPI.getAllCountries()
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
      if (selectValue === '0') {
         this.setState({
            countries_visible: data_countries
         });
      } else {
         const filtered_countries = data_countries.filter(country => {
            return country.region === selectValue;
         });

         this.setState({
            countries_visible: filtered_countries
         });
      }
   }

   handleSetActiveCountry = countryParam => {
      this.setState({
         activeCountry: countryParam
      });
   }

   getActiveCountry = () => {
      return this.state.activeCountry;
   }


   render() {

      return (
         <div className="App">
            <div className="inner-wrap">
               <Header />
               <Switch>
                  <Route exact path="/" render={() => (
                     <div className="sub-header-wrap">
                        <div className="above-main">
                           <Search onSearchChange={this.handleSearchChange} />
                           <Region onRegionChange={this.handleRegionChange} />
                        </div>
                        <Main
                           search_term={this.state.searchTerm}
                           countries_visible={this.state.countries_visible} 
                           all_countries={data_countries} />
                     </div>
                  )} />
                  {/* <Route path="/details" component={Details} /> */}
                  <Route path="/details" render={() => (
                     <Details setActiveCountry={this.handleSetActiveCountry} />
                  )} />
               </Switch>
            </div>
         </div>
      )
   }

}

export default App;
