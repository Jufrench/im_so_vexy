import React, { Component } from 'react';
import './App.scss';
import * as CountriesAPI from './CountriesAPI';
import Header from './components/Header/Header.js';
import Search from './components/Search/Search.js';
import Region from './components/Region/Region.js';
import CountryItem from './components/CountryItem/CountryItem.js';
import CountryPage from './components/CountryPage/CountryPage.js';
import { Route, Switch } from 'react-router-dom';

let data_countries = [];

class App extends Component {
   state = {
      countries_visible: [],
      searchTerm: '',
      activeCountry: '',
      visitedCountries: [],
      darkMode: false,
   }

   componentDidMount() {
      CountriesAPI.getAllCountries()
         .then(res => {
            data_countries = res;

            this.setState(() => {
               return { countries_visible: data_countries };
            });
         });
   }

   handleShowAllCountries = () => {
      this.setState({
         countries_visible: data_countries
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

   handleSetActiveCountry = countryParamObj => {
      this.setState({
         activeCountry: countryParamObj
      });
   }

   addToVisitedCountries = countryToAdd => {
      this.setState({
         visitedCountries: [...this.state.visitedCountries, countryToAdd]
      })
   }

   handleBackButtonClick = () => {
      let lastVisited = this.state.visitedCountries[this.state.visitedCountries.length - 1];
      let tempCountry = data_countries.map(countryItem => {
         let temp;
         if (countryItem.name === lastVisited) {
            temp = countryItem;
         }
         return temp;
      });

      this.setState({
         activeCountry: tempCountry
      });
   }

   removeFromVisitedCountries = () => {
      let copyVisitedCountries = this.state.visitedCountries;
      copyVisitedCountries.pop();
      this.setState({ visitedCountries: copyVisitedCountries });
   }

   render() {
      return (
         <div className="App">
            <div className={this.state.darkMode ? 'darkmode' : 'lightmode'}>
               {/* <Header toggleLightDarkMode={this.handleToggleLightDarkMode} /> */}
               <Header />
               <Switch>

                  {/* ===== ROUTE: HOME ===== */}
                  <Route exact path="/" render={() => (
                     <div className="sub-header-wrap">
                        <div className="above-main">
                           <Search onSearchChange={this.handleSearchChange} />
                           <Region onRegionChange={this.handleRegionChange} />
                        </div>
                        <main className="main">
                           <ul className="main-ul">
                              {this.state.countries_visible.map(country => (
                                 <CountryItem 
                                    key={country.alpha3Code} 
                                    country={country} 
                                    all_countries={data_countries} 
                                    setActiveCountry={this.handleSetActiveCountry}
                                    activeCountry={this.activeCountry}
                                    addToVisitedCountries={this.addToVisitedCountries} />
                              ))}
                           </ul>
                        </main>
                     </div>
                  )} />

                  {/* ===== ROUTE: COUNTRY PAGE ===== */}
                  <Route 
                     path={`/${this.state.activeCountry.alpha3Code}`}
                     render={() => (
                        <CountryPage 
                           activeCountryCode={this.state.activeCountry.alpha3Code}
                           setActiveCountry={this.handleSetActiveCountry} 
                           visitedCountries={this.state.visitedCountries}
                           addToVisitedCountries={this.addToVisitedCountries}
                           removeFromVisitedCountries={this.removeFromVisitedCountries} 
                           backButtonClick={this.handleBackButtonClick}
                           handleShowAllCountries={this.handleShowAllCountries} />
                  )} />

               </Switch>
            </div>
         </div>
      )
   }

}

export default App;
// export default withRouter(App);
