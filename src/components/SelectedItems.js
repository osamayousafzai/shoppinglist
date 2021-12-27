import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeItemById } from "../actions";

class SelectedItems extends Component {
  render() {
    return (
      <div>
        <h4>Selected Item</h4>
        <ul className="list-group">
          {this.props.selctedItems.map(i => {
            return (
              <li key={i.id} className="list-group-item">
                <div className="list-item">{i.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.removeItemById(i.id)}
                >
                  -
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
    selctedItems: state.selctedItems
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeItemById }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedItems);
