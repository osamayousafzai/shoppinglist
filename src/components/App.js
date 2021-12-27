import React, { Component } from "react";
import "../styles/index.css";
import AllShoppingItems from "./AllShoppingItems";
import SelectedItems from "./SelectedItems";
import ProductDetails from "./ProductDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-4">
          <AllShoppingItems />
        </div>
        <div className="col-md-4">
          <SelectedItems />
        </div>
        <div className="col-md-4">
          <ProductDetails />
        </div>
      </div>
    );
  }
}

export default App;
