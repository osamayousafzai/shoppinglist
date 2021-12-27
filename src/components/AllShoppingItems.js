import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addItemById } from "../actions";

class AllShoppingItems extends Component {
  render() {
    return (
      <div>
        <h4>All Shopping Items</h4>
        <ul className="list-group">
          {this.props.ShoppingList.map(i => {
            return (
              <li key={i.id} className="list-group-item">
                <div className="list-item">{i.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.addItemById(i.id)}
                >
                  +
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ShoppingList: state.ShoppingList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItemById }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllShoppingItems);
