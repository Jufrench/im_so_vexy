import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import * as FlagsAPI from './FlagsAPI';

class App extends Component {
   state = {
      countries: []
   }

   componentDidMount() {
      FlagsAPI.logTest();
      FlagsAPI.getAllCountries()
         .then(countries => {
            this.setState({ countries: [...this.state.countries, countries] });
         });
   }

   render() {
      console.log(this.state.countries);
      return (
        <div className="App">
          <header className="">
             I'm So Vexy!
          </header>
          <main>
          </main>
        </div>
     )
   }

}

export default App;
