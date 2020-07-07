///featur-1
import React from 'react';
import logo from './logo.svg';
import data from './data.json'
import './App.css';
import Products from './Componenets/Products'

class App   extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
Products:data.products,
sort:'',
size:''


    }
  }
  render(){


  return (
    <div className="App ">



<Products products={this.state.Products}></Products>


   
    </div>
  );
  }
}

export default App;
