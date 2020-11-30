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

   render() {
      return (
         <div>
            <input
               type="text"
               placeholder="Search for a country"
               ref={this.inputRef}
               onChange={this.handleSearchChange} />
         </div>
      )
   }
}

export default Search;
