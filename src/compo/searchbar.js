import React, { Component } from 'react'

class SearchBar extends Component {
  handleFilterTextChange=(e)=> {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange=(e)=>{
    this.props.onInStockChange(e.target.checked);
  }





    render() {
      return (
        <div>
          <input type="text" placeholder="Search..."  value={this.props.filterText}  onChange={this.handleFilterTextChange} />
          <p>
            <input type="checkbox" checked={this.props.inStockOnly}  onChange={this.handleInStockChange}/>
            
            Only show products in stock
          </p>
        </div>
      );
    }
  }
  export default SearchBar