///featur-1
import React from "react";
import logo from "./logo.svg";
import data from "./data.json";
import "./App.css";
import Products from "./Componenets/Products";
import Filter from "./Componenets/Filter";
import Cart from "./Componenets/Cart";

class App extends React.Component {
  constructor(props) {
    super(props);

    const local = localStorage.getItem("key")
      ? JSON.parse(localStorage.getItem("key"))
      : [];

    this.state = {
      Products: data.products,
      sort: "",
      size: "",
      cart: local,
    };
  }
createorder =(order) =>{
alert("edeeefe" + order.name)

}



  removecart = (prv) => {
    const cartItems = this.state.cart;
    let cv = cartItems.filter((price) => price._id !== prv._id);
    this.setState({
      cart: cv,
    });
    localStorage.setItem("key", JSON.stringify(cv));
  };

  addcaart = (product) => {
    const cartItems = this.state.cart.slice();

    let alreadyExists = false;

    cartItems.forEach((x) => {
      if (x._id === product._id) {
        alreadyExists = true;
        x.countc++;
      }
    });
    if (!alreadyExists) {
      cartItems.push({ ...product, countc: 1 });
    }
    this.setState({ cart: cartItems });

    localStorage.setItem("key", JSON.stringify(cartItems));
  };

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

        Products: data.products.sort((a, b) => (a._id > b._id ? 1 : -1)),
      });
    }
  };





  render() {
    return (
      <div className="App ">
        <div style={{ float: "left", width: "80%" }}>
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
            addcart={this.addcaart}
          ></Products>
        </div>

        <div style={{ float: "right", width: "20%" }}>
          <Cart Cart={this.state.cart} removecart={this.removecart}createorder={this.ce}></Cart>
        </div>
      </div>
    );
  }
}

export default App;
