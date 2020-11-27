import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import * as FlagsAPI from './FlagsAPI';

// https://main.d3kiifg2k1bcmx.amplifyapp.com/

class App extends Component {
   state = {
      countries: []
   }

   componentDidMount() {
      FlagsAPI.logTest();
      FlagsAPI.getAllCountries()
         // .then(countries => {
         //    this.setState({ countries: [...this.state.countries, countries] });
         // });
         .then(countries => {
            this.setState(() => {
               return { countries };
            });
         });
   }

   render() {
      console.log(this.state.countries[0]);
      return (
     <div className="App">
          <header className="header">
             <h1>I'm So Vexy!</h1>
             <p>Under Construction...</p>
          </header>
          <main>
            <ul className="main-ul">
             {this.state.countries.map(country => (
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
