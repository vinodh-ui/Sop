import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Thankyou from './Thankyou'

export default class Cart extends Component {
  constructor(props) {
    super(props);

    const locall = localStorage.getItem("key1")
      ? JSON.parse(localStorage.getItem("key1"))
      : [];

    this.state = {
      showcheckout: false,
      name: "",
      email: "",
      address: "",
      datac: locall,
    };

    this.handlechange = this.handlechange.bind(this);
  }
  createorder = (e) => {
    e.preventDefault();
    const orderc = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      //cart:this.props.Cart
    };
    
    let arr = this.state.datac;
    arr.push(orderc);

    this.setState({
      datac: arr,
      name: "",
      email: "",
      address: "",
    });
  //  console.log(this.state.datac);

    localStorage.setItem("key1", JSON.stringify(arr));
  };

  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  plavy = () => {
    this.setState({ showcheckout: true });
  };

clear =()=>{
 //localStorage.removeItem("key1")
 localStorage.removeItem("key")

}




  render() {
    const { Cart } = this.props;

    return (
      <div>
        {Cart.length === 0 ? (
          "no pr in cart"
        ) : (
          <div>
            {" "}
            {Cart.length} in cart
            {Cart.map((pr) => {
              return (
                <div key={pr._id}>
                  <p style={{ float: "left", width: "80%" }}> {pr.title} </p>

                  <div style={{ float: "left", width: "20%" }}>
                    <img src={pr.image} alt={pr.title} />
                    {pr.price} X {pr.countc}
                    <button onClick={() => this.props.removecart(pr)}>
                      Remove cart
                    </button>
                  </div>
                </div>
              );
            })}
            total :{" "}
            {Cart.reduce((a, c) => a + c.price * c.countc, 0).toFixed(0)}
            <button onClick={() => this.plavy()}> Procedd to check out</button>
            {this.state.showcheckout ? (
              <div>
                <form onSubmit={this.createorder}>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="name"
                    onChange={this.handlechange}
                    value={this.state.name}
                  />
                  <input
                    type="text"
                    required
                    name="email"
                    placeholder="email"
                    onChange={this.handlechange}
                    value={this.state.email}
                  />
                  <input
                    type="text"
                    required
                    name="address"
                    placeholder="address"
                    onChange={this.handlechange}
                    value={this.state.address}
                  />
                  <button>submit</button>
                </form>
              </div>
            ) : null}
            {this.state.datac.map((er) => {
              return (
                <div>
                  <p> {er.name} </p>
                  <p> {er.email} </p>
                  <p> {er.address} </p>
                </div>
              );
            })}


<button onClick={this.clear}>remove</button>

          </div>




        )}


      </div>
    );
  }
}
