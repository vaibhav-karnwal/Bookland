import React, { Component } from 'react'
import products from '../Jsondata';
import Context from './Context';
import SearchBar from './SearchBar'

export default class FilterTableProduct extends Component {
  constructor(props){
    super( props );
    this.state={
        products:products,
        onStock:false,
        filterText:''
    }
}
    filterProductsByName=( product )=>{
       this.setState({filterText:product})
    }

    onStockChange=( flag )=>{
        this.setState({
          onStock:flag
        })
    }

  render() {
    return (
      <div>
          <SearchBar onFilterTextChange={this.filterProductsByName} onStockChange={this.onStockChange} onStock={this.state.onStock}/>
            <Context products={this.state.products} inStockOnly={this.state.onStock} filterText={this.state.filterText}/>
      </div>
    )
  }
}
import React from 'react';

const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];

function App() {
  return (
    <div>
      {products.filter(person => person.category==storybook).map(filteredCategory => (
        <li>
          {filteredCategory._id}
        </li>
      ))}
    </div>
  );
}

export default App;