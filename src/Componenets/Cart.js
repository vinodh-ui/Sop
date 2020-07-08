import React, { Component } from "react";

export default class Cart extends Component {
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
            {Cart.reduce((a, c) => a + c.price * c.countc, 0).toFixed(2)}
          </div>
        )}
      </div>
    );
  }
}
