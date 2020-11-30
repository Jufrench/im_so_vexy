import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
   constructor(props) {
      super(props);
      this.inputRef = React.createRef();
   }

   handleSearchChange = event => {
      let searchInputValue = this.inputRef.current.value;
      this.props.onSearchChange(searchInputValue);
   }

   render() {
      return (
         <section className="search">
            <div className="input-wrap">
               <i className="fas fa-search"></i>
               <label>Search for a country</label>
               <input
                  type="text"
                  ref={this.inputRef}
                  onChange={this.handleSearchChange} />
            </div>
         </section>
      )
   }
}

export default Search;
