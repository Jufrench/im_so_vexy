import React, { Component } from 'react';
import './App.scss';
import * as CountriesAPI from './CountriesAPI';
import Header from './components/Header/Header.js';
import Search from './components/Search/Search.js';
import Region from './components/Region/Region.js';
import Main from './components/Main/Main.js';
import CountryItem from './components/CountryItem/CountryItem.js';
import CountryPage from './components/Details/Details.js';
// import Details from './components/Details/Details.js';
import { Route, Switch, withRouter } from 'react-router-dom';


// https://main.d3kiifg2k1bcmx.amplifyapp.com/

const data_countries = [];

class App extends Component {
   state = {
      countries_visible: [],
      searchTerm: '',
      activeCountry: '',
      previousCountry: '',
      visitedCountries: [],
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

   handleSetActiveCountry = countryParam => {
      this.setState({
         activeCountry: countryParam
      });
   }

   handleSetPreviousCountry = countryParam => {
      this.setState({
         previousCountry: countryParam
      });

      // setTimeout(() => {
      //    console.log('PreviousCountry: ', this.state.previousCountry.name);
      // }, 2000);
   }

   addToVisitedCountries = countryToAdd => {
      
      if (countryToAdd !== '/') {
         countryToAdd = countryToAdd.slice(1, countryToAdd.length);
      }
      
      this.setState({
         visitedCountries: [...this.state.visitedCountries, countryToAdd]
      })
      // if (countryToAdd !== '') {
         
      //    console.log(countryToAdd);
      //    console.log(this.state.visitedCountries);
      // }

      setTimeout(() => {
         console.log(this.state.visitedCountries);
      }, 2000);
   }

   updateAfterGoingBack = () => {
      // console.log('GOING BACK!');

      let tempCountry;
      let lastVisited = this.state.visitedCountries[this.state.visitedCountries.length - 1];
      console.log(lastVisited);
      data_countries.forEach(countryItem => {
         if (countryItem.name === lastVisited) {
            tempCountry = countryItem;
            console.log(tempCountry);
         }
      })

      this.setState({
         activeCountry: tempCountry
      });

      setTimeout(() => {
         console.log('activeCountry: ', this.state.activeCountry.name);
      }, 2000);
   }

   removeFromVisitedCountries = () => {

      let copyVisitedCountries = this.state.visitedCountries;
      copyVisitedCountries.pop();
      this.setState({ visitedCountries: copyVisitedCountries });

      setTimeout(() => {
         console.log(this.state.visitedCountries);
      }, 2000);
   }



   render() {
      return (
         <div className="App">
            <div className="inner-wrap">
               <Header />
               <Switch>
                  <Route exact path="/" render={() => (
                     // <div className="sub-header-wrap">
                     //    <div className="above-main">
                     //       <Search onSearchChange={this.handleSearchChange} />
                     //       <Region onRegionChange={this.handleRegionChange} />
                     //    </div>
                     //    <Main
                     //       search_term={this.state.searchTerm}
                     //       countries_visible={this.state.countries_visible} 
                     //       all_countries={data_countries} 
                     //       setActiveCountry={this.handleSetActiveCountry} 
                     //       activeCountry={this.state.activeCountry} />
                     // </div>

                     <div className="sub-header-wrap">
                        <div className="above-main">
                           <Search onSearchChange={this.handleSearchChange} />
                           <Region onRegionChange={this.handleRegionChange} />
                        </div>
                        <main className="main">
                           <ul className="main-ul">
                              {this.state.countries_visible.map(country => (
                                 <CountryItem 
                                    key={country.name} 
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
                  {/* <Route path="/details" component={Details} /> */}
                  {/* <Route path="/details" render={() => ( */}
                  <Route 
                     path={`/${this.state.activeCountry.name}`} 
                     // path={ this.state.visitedCountries.length === 1 ? 
                     //       "/" : `/${this.state.activeCountry.name}`
                     // } 
                     render={() => (
                        <CountryPage 
                           activeCountry={this.state.activeCountry}
                           previousCountry={this.state.previousCountry}
                           setActiveCountry={this.handleSetActiveCountry} 
                           setPreviousCountry={this.handleSetPreviousCountry} 
                           allCountries={data_countries}
                           addToVisitedCountries={this.addToVisitedCountries}
                           removeFromVisitedCountries={this.removeFromVisitedCountries} 
                           updateAfterGoingBack={this.updateAfterGoingBack}
                           visitedCountries={this.state.visitedCountries}
                           handleShowAllCountries={this.handleShowAllCountries} />
                     )} />
               </Switch>
            </div>
         </div>
      )
   }

}

// export default App;
export default withRouter(App);
