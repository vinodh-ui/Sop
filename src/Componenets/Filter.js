import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <div className="filter">
          <div className="filter-result">{this.props.count}: Products</div>
          <div className="filter-sort">
            Order{" "}
            <select
              onChange={this.props.filterproducts}
              value={this.props.sort}
            >
              <option value="latest">Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </div>
          <div className="filter-size">
            Filter{" "}
            <select onChange={this.props.Sortproducts} value={this.props.size}>
              <option value="">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default Filter;
