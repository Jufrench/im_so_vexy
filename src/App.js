import React, { Component } from 'react';
import './App.scss';
import * as FlagsAPI from './FlagsAPI';
import Main from './components/Main/Main.js';
import Details from './components/Details/Details.js';
import { Route, Switch } from 'react-router-dom';


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
         const filtered_countries = data_countries.filter(country => {
            return country.region === selectValue;
         });

         this.setState({
            countries_visible: filtered_countries
         });
      }
   }

   render() {

      return (
         <div className="App">
            <header className="header">
               <h1>I&apos;m So Vexy!</h1>
               <p>Under Construction...</p>
            </header>
            <Switch>
               <Route exact path="/" render={() => (
                  <Main
                     search_term={this.state.searchTerm}
                     countries_visible={this.state.countries_visible}
                     onSearchChange={this.handleSearchChange}
                     onRegionChange={this.handleRegionChange} />
               )} />
               <Route path="/details" component={Details} />
            </Switch>
         </div>
      )
   }

}

export default App;
