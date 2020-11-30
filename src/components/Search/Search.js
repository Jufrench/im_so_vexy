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
               <input
                  type="text"
                  ref={this.inputRef}
                  placeholder="Search for a country"
                  onChange={this.handleSearchChange} />
               <i className="fas fa-search"></i>
            </div>
         </section>
      )
   }
}

export default Search;
