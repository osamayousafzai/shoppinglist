import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetails extends Component {
  totalPrice() {
    let price = 0;
    this.props.selctedItems.forEach((i) => (price += i.price));
    return price;
  }

  render() {
    return (
      <div>
        <h4>Product Details</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Total Price:</b> {this.totalPrice()}
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selctedItems: state.selctedItems,
  };
}

export default connect(mapStateToProps, null)(ProductDetails);
