import React, { Component } from "react";

 class Products extends Component {
  render() {
    return (
      <div className="cc">
          
        {this.props.products.map((Product) => {
          return <div key={Product._id}>
<h1>{Product.title}</h1>
<img src={Product.image} alt={Product.title}/>
<button>Add cart</button>




          </div>;
        })}

        
      </div>
    );
  }
}
export default Products