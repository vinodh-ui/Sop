///featur-1
import React from "react";
import logo from "./logo.svg";
import data from "./data.json";
import "./App.css";
import Products from "./Componenets/Products";
import Filter from "./Componenets/Filter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Products: data.products,
      sort: "",
      size: "",
    };
  }

  Sortproducts = (event) => {
    console.log(event.target.value);

    if (event.target.value === "") {
      this.setState({ Products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        Products: data.products.filter((pr) =>
          pr.availableSizes.includes(event.target.value)
        ),
      });
    }
  };



  filterproducts = (e) => {
    if (e.target.value === "lowest") {
      this.setState({
        sort: e.target.value,
        Products: data.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      });
    } else if (e.target.value === "highest") {
      this.setState({
        sort: e.target.value,
        Products: data.products.reverse((a, b) => (b.price > a.price ? 1 : -1)),
      });
    } else if (e.target.value === "latest") {

      this.setState({

        sort: e.target.value,
       Products:data.products.sort((a,b) => a._id > b._id ? 1: -1)

      });

    }
   
  };



  render() {
    return (
      <div className="App ">
        <Filter
          count={this.state.Products.length}
          size={this.state.size}
          sort={this.state.sort}
          filterproducts={this.filterproducts}
          Sortproducts={this.Sortproducts}
        >
          {" "}
        </Filter>

        <Products
          products={this.state.Products}
          Pr={this.state.Products.length}
        ></Products>
      </div>
    );
  }
}

export default App;
