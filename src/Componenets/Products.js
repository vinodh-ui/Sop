import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <div className="cc">
        {this.props.Pr === 0 ? (
          "No products found for  your size try  some other sizes"
        ) : (
          <div>
            {this.props.products.map((Product) => {
              return (
                <div key={Product._id}>
                  <h1>{Product.title}</h1>
                  <img src={Product.image} alt={Product.title} />
                  {Product.availableSizes}
                  <h4>Price: {Product.price}</h4>

                  <button onClick={()=> this.props.addcart(Product)}>Add cart</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default Products;
