import React, { Component } from 'react';

class Search extends Component {
   constructor(props) {
      super(props);
      this.inputRef = React.createRef();
   }

   handleSearchChange = event => {
      let searchInputValue = this.inputRef.current.value;
      this.props.onSearchChange(searchInputValue);
   }

   handleFilter = event => {
      let searchInputValue = this.inputRef.current.value;
      this.props.onFilter(searchInputValue, this.inputRef.current);
   }

   render() {
      return (
         <div>
            <input
               type="text"
               ref={this.inputRef}
               placeholder="Search for a country"
               onChange={() => {
                  this.handleSearchChange();
                  this.handleFilter();
               }} />
         </div>
      )
   }
}

export default Search;
